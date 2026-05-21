import * as THREE from "three";

const mapPins = [
  {
    id: "tokyo",
    label: "Tokyo",
    marker: { x: 0.64, y: 0.44 },
    targetStop: "tokyo",
  },
  {
    id: "nagasaki",
    label: "Nagasaki / Dejima",
    marker: { x: 0.22, y: 0.22 },
    targetStop: "nagasaki",
  },
  {
    id: "saga",
    label: "Saga",
    marker: { x: 0.25, y: 0.26 },
    targetStop: "nagasaki",
  },
  {
    id: "kyoto",
    label: "Kyoto",
    marker: { x: 0.47, y: 0.37 },
    targetStop: "kyotoShimane",
  },
  {
    id: "shimane",
    label: "Shimane",
    marker: { x: 0.38, y: 0.38 },
    targetStop: "kyotoShimane",
  },
];

const mapTexturePath = "./3djapan/images/jpimg8k.jpg";
const isCalibrationMode = new URLSearchParams(window.location.search).has("calibratePins");
const allPinIds = mapPins.map((pin) => pin.id);
const defaultModelMarkerProjection = {
  offsetX: 0.109,
  offsetY: 1.109,
  scaleX: 1,
  scaleY: -1.09,
};
const defaultMapTransform = {
  x: 1.0289113347577978,
  y: 0,
  z: 0.7501123721342408,
  scale: 0.7777473309135209,
  rotationX: 5.0920849609375,
  rotationY: -0.7,
  rotationZ: 0,
};
const defaultPinOffsets = {
  tokyo: { x: -0.5067949793364548, z: 0.31589725330287743 },
  nagasaki: { x: -0.4081614583333337, z: 0.26113664140058823 },
  saga: { x: -0.22950307210286391, z: 0.002405544549977545 },
  kyoto: { x: -0.5117473958333321, z: 0.42903210512707934 },
  shimane: { x: -0.936225494384765, z: 0.9896968042917917 },
};
const calibrationStorageKey = "kampo-2d-pin-calibration";
const mapTransformStorageKey = "kampo-2d-map-transform";
const pinOffsetsStorageKey = "kampo-2d-pin-offsets";
let modelMarkerProjection = { ...defaultModelMarkerProjection };
let mapTransform = { ...defaultMapTransform };
let pinOffsets = structuredClone(defaultPinOffsets);
let showCalibrationPins = isCalibrationMode;

if (isCalibrationMode) {
  try {
    const savedProjection = JSON.parse(window.localStorage.getItem(calibrationStorageKey) ?? "null");
    if (savedProjection) {
      modelMarkerProjection = { ...modelMarkerProjection, ...savedProjection };
    }
  } catch (error) {
    console.warn("Pin calibration settings could not be loaded", error);
  }

  try {
    const savedMapTransform = JSON.parse(window.localStorage.getItem(mapTransformStorageKey) ?? "null");
    if (savedMapTransform) {
      mapTransform = { ...mapTransform, ...savedMapTransform };
    }
  } catch (error) {
    console.warn("Map transform settings could not be loaded", error);
  }

  try {
    const savedPinOffsets = JSON.parse(window.localStorage.getItem(pinOffsetsStorageKey) ?? "null");
    if (savedPinOffsets) {
      pinOffsets = Object.fromEntries(
        mapPins.map((pin) => [
          pin.id,
          {
            ...defaultPinOffsets[pin.id],
            ...(savedPinOffsets[pin.id] ?? {}),
          },
        ]),
      );
    }
  } catch (error) {
    console.warn("Individual pin offset settings could not be loaded", error);
  }
}

const storyStops = [
  {
    id: "overview",
    label: "Overview",
    marker: { x: 0.52, y: 0.52 },
    camera: { height: 8.4, distance: 7.4, side: -0.6 },
    pinIds: [],
    projectMarker: false,
  },
  {
    id: "tokyo",
    label: "Tokyo",
    marker: { x: 0.64, y: 0.44 },
    camera: { height: 3.4, distance: 3.2, side: 0.7 },
    pinIds: ["tokyo"],
  },
  {
    id: "nagasaki",
    label: "Nagasaki",
    marker: { x: 0.22, y: 0.22 },
    camera: { height: 3.2, distance: 3.0, side: -0.45 },
    pinIds: ["nagasaki", "saga"],
  },
  {
    id: "edoTokyo",
    label: "Edo / Tokyo",
    marker: { x: 0.61, y: 0.44 },
    camera: { height: 3.0, distance: 2.8, side: 0.45 },
    pinIds: ["tokyo", "saga"],
  },
  {
    id: "kyotoShimane",
    label: "Kyoto-Shimane",
    marker: { x: 0.45, y: 0.36 },
    camera: { height: 3.25, distance: 3.0, side: -0.35 },
    pinIds: ["kyoto", "shimane", "tokyo"],
  },
  {
    id: "nationalConclusion",
    label: "Japan",
    marker: { x: 0.52, y: 0.52 },
    camera: { height: 8.0, distance: 7.0, side: 0.5 },
    pinIds: allPinIds,
    projectMarker: false,
  },
];

const canvas = document.querySelector("#japan-map");
const mapStage = document.querySelector(".map-stage");
const mapFallback = document.querySelector("#map-fallback");
const mapStatus = document.querySelector("#map-status");
const mapTitle = document.querySelector("#map-title");
const pinLabelLayer = document.querySelector("#map-pin-labels");
const panels = [...document.querySelectorAll(".story-panel")];
const progressButtons = [...document.querySelectorAll(".stop-dot")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let renderer;
let scene;
let camera;
let modelRoot;
let mapVisualRoot;
let modelBounds;
let mapBaseTransform;
let axisGizmo;
let targetCamera = new THREE.Vector3(0, 8, 8);
let targetLookAt = new THREE.Vector3(0, 0, 0);
let currentLookAt = new THREE.Vector3(0, 0, 0);
let activeStopId = "overview";
let hasModel = false;
const pinObjects = new Map();
const pinLabels = new Map();
const projectedPinPosition = new THREE.Vector3();

function setActiveStop(stopId) {
  if (activeStopId === stopId) return;

  activeStopId = stopId;
  document.body.dataset.activeStop = stopId;
  mapTitle.classList.toggle("is-visible", stopId === "overview");

  progressButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.stopTarget === stopId);
  });

  updateCameraTarget();
  updatePinStates();
}

function getStop(stopId = activeStopId) {
  return storyStops.find((stop) => stop.id === stopId) ?? storyStops[0];
}

function getActivePinIds(stopId = activeStopId) {
  return new Set(getStop(stopId).pinIds ?? []);
}

function clampMarkerValue(value) {
  return Math.min(Math.max(value, 0), 1);
}

function projectMarkerToModel(marker) {
  return {
    x: clampMarkerValue(marker.x * modelMarkerProjection.scaleX + modelMarkerProjection.offsetX),
    y: clampMarkerValue(marker.y * modelMarkerProjection.scaleY + modelMarkerProjection.offsetY),
  };
}

function pointFromMarker(marker, shouldProjectMarker = true) {
  if (!modelBounds) return new THREE.Vector3();

  const size = new THREE.Vector3();
  modelBounds.getSize(size);
  const projectedMarker = shouldProjectMarker ? projectMarkerToModel(marker) : marker;

  return new THREE.Vector3(
    modelBounds.min.x + size.x * projectedMarker.x,
    modelBounds.max.y + size.y * 0.04,
    modelBounds.min.z + size.z * projectedMarker.y,
  );
}

function pointFromPin(pin) {
  const pinOffset = pinOffsets[pin.id] ?? { x: 0, z: 0 };
  const point = pointFromMarker(pin.marker);
  point.x += pinOffset.x;
  point.z += pinOffset.z;
  return point;
}

function updateCameraTarget() {
  if (!modelBounds || !camera) return;

  const stop = getStop();
  const target = pointFromMarker(stop.marker, stop.projectMarker !== false);
  const size = new THREE.Vector3();
  modelBounds.getSize(size);
  const span = Math.max(size.x, size.z);

  targetLookAt.copy(target);
  targetCamera.set(
    target.x + span * stop.camera.side * 0.13,
    target.y + stop.camera.height,
    target.z + span * stop.camera.distance * 0.2,
  );

  if (reduceMotion) {
    camera.position.copy(targetCamera);
    currentLookAt.copy(targetLookAt);
    camera.lookAt(currentLookAt);
  }
}

function frameInitialMap() {
  const stop = getStop("overview");
  const target = pointFromMarker(stop.marker, stop.projectMarker !== false);
  const size = new THREE.Vector3();
  modelBounds.getSize(size);
  const span = Math.max(size.x, size.z);

  currentLookAt.copy(target);
  camera.position.set(target.x - span * 0.1, target.y + 8.8, target.z + span * 1.28);
  camera.lookAt(currentLookAt);
  updateCameraTarget();
}

function normalizeModel(root) {
  const sourceBounds = new THREE.Box3().setFromObject(root);
  const center = new THREE.Vector3();
  const size = new THREE.Vector3();

  sourceBounds.getCenter(center);
  sourceBounds.getSize(size);

  const scale = 10 / Math.max(size.x, size.z);
  root.scale.setScalar(scale);
  root.position.set(-center.x * scale, -center.y * scale, -center.z * scale);

  modelBounds = new THREE.Box3().setFromObject(root);
}

async function createMapPlane() {
  const textureLoader = new THREE.TextureLoader();
  const texture = await textureLoader.loadAsync(mapTexturePath);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);

  const aspectRatio = texture.image.width / texture.image.height;
  const mapHeight = 10;
  const mapWidth = mapHeight * aspectRatio;
  const geometry = new THREE.PlaneGeometry(mapWidth, mapHeight);
  geometry.rotateX(-Math.PI / 2);

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.name = "japan-2d-map";
  plane.position.y = -0.02;

  const root = new THREE.Group();
  root.name = "japan-2d-map-root";
  root.add(plane);
  return root;
}

function captureMapBaseTransform(root) {
  mapBaseTransform = {
    position: root.position.clone(),
    rotation: root.rotation.clone(),
    scale: root.scale.clone(),
  };
}

function applyMapTransform() {
  if (!mapVisualRoot || !mapBaseTransform) return;

  mapVisualRoot.position.set(
    mapBaseTransform.position.x + mapTransform.x,
    mapBaseTransform.position.y + mapTransform.y,
    mapBaseTransform.position.z + mapTransform.z,
  );
  mapVisualRoot.rotation.set(
    mapBaseTransform.rotation.x + THREE.MathUtils.degToRad(mapTransform.rotationX),
    mapBaseTransform.rotation.y + THREE.MathUtils.degToRad(mapTransform.rotationY),
    mapBaseTransform.rotation.z + THREE.MathUtils.degToRad(mapTransform.rotationZ),
  );
  mapVisualRoot.scale.set(
    mapBaseTransform.scale.x * mapTransform.scale,
    mapBaseTransform.scale.y * mapTransform.scale,
    mapBaseTransform.scale.z * mapTransform.scale,
  );
}

function createPinMesh(pin, pinHeight, pinRadius) {
  const group = new THREE.Group();
  group.name = `map-pin-${pin.id}`;

  const pinMaterial = new THREE.MeshStandardMaterial({
    color: 0xc55034,
    emissive: 0x3a1109,
    emissiveIntensity: 0.65,
    roughness: 0.45,
    metalness: 0.08,
  });
  const haloMaterial = new THREE.MeshStandardMaterial({
    color: 0xf0d68a,
    emissive: 0x7c4a11,
    emissiveIntensity: 0.35,
    transparent: true,
    opacity: 0.58,
    roughness: 0.5,
  });

  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(pinRadius * 1.55, pinRadius * 0.14, 8, 28),
    haloMaterial,
  );
  halo.rotation.x = Math.PI / 2;
  halo.position.y = pinHeight * 0.02;

  const point = new THREE.Mesh(new THREE.ConeGeometry(pinRadius * 0.78, pinHeight * 0.42, 24), pinMaterial);
  point.rotation.x = Math.PI;
  point.position.y = pinHeight * 0.21;

  const head = new THREE.Mesh(new THREE.SphereGeometry(pinRadius, 24, 16), pinMaterial);
  head.position.y = pinHeight * 0.46;

  group.add(halo, point, head);
  group.position.copy(pointFromPin(pin));
  group.userData = { pin, pinMaterial, haloMaterial, pinHeight };

  return group;
}

function createPinLabel(pin) {
  const label = document.createElement("button");
  label.className = "map-pin-label";
  label.type = "button";
  label.dataset.mapPin = pin.id;
  label.textContent = pin.label;
  label.setAttribute("aria-label", `Jump to ${pin.label}`);
  label.addEventListener("click", () => {
    document
      .querySelector(`.story-panel[data-stop="${pin.targetStop}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  pinLabelLayer?.append(label);
  pinLabels.set(pin.id, label);
}

function setupMapPins() {
  if (!modelBounds || !modelRoot) return;

  const size = new THREE.Vector3();
  modelBounds.getSize(size);
  const span = Math.max(size.x, size.z);
  const pinHeight = span * 0.105;
  const pinRadius = span * 0.018;

  mapPins.forEach((pin) => {
    const pinMesh = createPinMesh(pin, pinHeight, pinRadius);
    modelRoot.add(pinMesh);
    pinObjects.set(pin.id, pinMesh);
    createPinLabel(pin);
  });

  updatePinStates();
}

function updatePinStates() {
  const activePinIds = getActivePinIds();
  const shouldShowPins = activeStopId !== "overview" || showCalibrationPins;

  mapPins.forEach((pin) => {
    const pinMesh = pinObjects.get(pin.id);
    const pinLabel = pinLabels.get(pin.id);
    const isActive = activePinIds.has(pin.id);

    pinLabel?.classList.toggle("is-active", isActive);
    if (pinMesh) {
      pinMesh.visible = shouldShowPins;
      pinMesh.userData.pinMaterial.color.setHex(isActive ? 0xf0c75e : 0xc55034);
      pinMesh.userData.pinMaterial.emissive.setHex(isActive ? 0x825018 : 0x3a1109);
      pinMesh.userData.haloMaterial.opacity = isActive ? 0.82 : 0.42;
      pinMesh.scale.setScalar(isActive ? 1.18 : 1);
    }
  });
}

function updatePinLabels() {
  if (!camera || !pinLabelLayer || !hasModel) return;

  const rect = canvas.getBoundingClientRect();
  const shouldShowLabels = activeStopId !== "overview" || showCalibrationPins;

  mapPins.forEach((pin) => {
    const pinMesh = pinObjects.get(pin.id);
    const pinLabel = pinLabels.get(pin.id);
    if (!pinMesh || !pinLabel) return;

    pinMesh.getWorldPosition(projectedPinPosition);
    projectedPinPosition.y += pinMesh.userData.pinHeight * 0.85;
    projectedPinPosition.project(camera);

    const x = (projectedPinPosition.x * 0.5 + 0.5) * rect.width;
    const y = (-projectedPinPosition.y * 0.5 + 0.5) * rect.height;
    const isInView =
      projectedPinPosition.z >= -1 &&
      projectedPinPosition.z <= 1 &&
      x >= -48 &&
      x <= rect.width + 48 &&
      y >= -48 &&
      y <= rect.height + 48;

    pinLabel.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -115%)`;
    pinLabel.classList.toggle("is-visible", shouldShowLabels && isInView);
  });
}

function updatePinPositions() {
  if (!modelBounds) return;

  mapPins.forEach((pin) => {
    const pinMesh = pinObjects.get(pin.id);
    if (pinMesh) {
      pinMesh.position.copy(pointFromPin(pin));
    }
  });

  updateCameraTarget();
  updatePinStates();
  updatePinLabels();
}

function getCalibrationReport() {
  return {
    mapTransform: { ...mapTransform },
    pinOffsets: structuredClone(pinOffsets),
    markerProjection: { ...modelMarkerProjection },
    pins: mapPins.map((pin) => ({
      id: pin.id,
      label: pin.label,
      marker: { ...pin.marker },
      individualOffset: { ...(pinOffsets[pin.id] ?? { x: 0, z: 0 }) },
      projectedMarker: projectMarkerToModel(pin.marker),
    })),
  };
}

function updateCalibrationOutput(output) {
  output.value = JSON.stringify(getCalibrationReport(), null, 2);
}

function createAxisLabel(text, color) {
  const labelCanvas = document.createElement("canvas");
  labelCanvas.width = 64;
  labelCanvas.height = 64;
  const context = labelCanvas.getContext("2d");
  context.clearRect(0, 0, labelCanvas.width, labelCanvas.height);
  context.fillStyle = color;
  context.font = "700 34px system-ui, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, 32, 33);

  const texture = new THREE.CanvasTexture(labelCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(material);
  sprite.scale.setScalar(0.28);
  return sprite;
}

function setupAxisGizmo() {
  if (!isCalibrationMode || axisGizmo) return;

  const axisCanvas = document.createElement("canvas");
  axisCanvas.className = "axis-gizmo";
  axisCanvas.setAttribute("aria-label", "XYZ axis orientation");
  document.body.append(axisCanvas);

  const axisScene = new THREE.Scene();
  const axisCamera = new THREE.OrthographicCamera(-1.25, 1.25, 1.25, -1.25, 0.1, 10);
  axisCamera.position.set(0, 0, 3);
  axisCamera.lookAt(0, 0, 0);

  const axisRenderer = new THREE.WebGLRenderer({
    canvas: axisCanvas,
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true,
  });
  axisRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  axisRenderer.setSize(124, 124, false);

  const axisRoot = new THREE.Group();
  axisScene.add(axisRoot);

  const axes = [
    { label: "X", color: "#ef4444", direction: new THREE.Vector3(1, 0, 0) },
    { label: "Y", color: "#22c55e", direction: new THREE.Vector3(0, 1, 0) },
    { label: "Z", color: "#3b82f6", direction: new THREE.Vector3(0, 0, 1) },
  ];

  axes.forEach((axis) => {
    const arrow = new THREE.ArrowHelper(axis.direction, new THREE.Vector3(0, 0, 0), 0.82, axis.color, 0.18, 0.09);
    const label = createAxisLabel(axis.label, axis.color);
    label.position.copy(axis.direction.clone().multiplyScalar(1.02));
    axisRoot.add(arrow, label);
  });

  axisScene.add(new THREE.AmbientLight(0xffffff, 2));
  axisGizmo = { renderer: axisRenderer, scene: axisScene, camera: axisCamera, root: axisRoot };
}

function updateAxisGizmo() {
  if (!axisGizmo || !camera || !mapVisualRoot) return;

  const modelQuaternion = new THREE.Quaternion();
  mapVisualRoot.updateWorldMatrix(true, false);
  camera.updateMatrixWorld();
  mapVisualRoot.getWorldQuaternion(modelQuaternion);
  axisGizmo.root.quaternion.copy(camera.quaternion).invert().multiply(modelQuaternion);
  axisGizmo.renderer.render(axisGizmo.scene, axisGizmo.camera);
}

function setupPinCalibrationControls() {
  if (!isCalibrationMode) return;

  document.body.dataset.pinCalibration = "true";

  const panel = document.createElement("aside");
  panel.className = "pin-calibrator";
  panel.setAttribute("aria-label", "Pin calibration controls");
  panel.innerHTML = `
    <details open>
      <summary>Map calibration</summary>
      <p class="pin-calibrator__note">Move the 2D Japan map under the fixed pins.</p>
      <div class="pin-calibrator__grid">
        <label>
          <span>Map X</span>
          <input type="number" step="0.25" data-map-transform-field="x" />
        </label>
        <label>
          <span>Map Z</span>
          <input type="number" step="0.25" data-map-transform-field="z" />
        </label>
        <label>
          <span>Map Y</span>
          <input type="number" step="0.25" data-map-transform-field="y" />
        </label>
        <label>
          <span>Map scale</span>
          <input type="number" step="0.25" data-map-transform-field="scale" />
        </label>
        <label>
          <span>Map X rotate</span>
          <input type="number" step="0.25" data-map-transform-field="rotationX" />
        </label>
        <label>
          <span>Map Y rotate</span>
          <input type="number" step="0.25" data-map-transform-field="rotationY" />
        </label>
        <label>
          <span>Map Z rotate</span>
          <input type="number" step="0.25" data-map-transform-field="rotationZ" />
        </label>
      </div>
      <div class="pin-calibrator__nudges" aria-label="Nudge 2D map">
        <button type="button" data-map-nudge="up">Map up</button>
        <button type="button" data-map-nudge="left">Map left</button>
        <button type="button" data-map-nudge="right">Map right</button>
        <button type="button" data-map-nudge="down">Map down</button>
      </div>
      <details class="pin-calibrator__advanced" open>
        <summary>Individual pins</summary>
        <p class="pin-calibrator__note">Fine-tune one location without moving the rest.</p>
        <div class="pin-calibrator__grid">
          ${mapPins
            .map(
              (pin) => `
                <label>
                  <span>${pin.label} X</span>
                  <input type="number" step="0.001" data-pin-offset-id="${pin.id}" data-pin-offset-field="x" />
                </label>
                <label>
                  <span>${pin.label} Z</span>
                  <input type="number" step="0.001" data-pin-offset-id="${pin.id}" data-pin-offset-field="z" />
                </label>
              `,
            )
            .join("")}
        </div>
      </details>
      <details class="pin-calibrator__advanced">
        <summary>Pin projection</summary>
        <p class="pin-calibrator__note">Use this only if the pin group itself needs recalibration.</p>
      <div class="pin-calibrator__grid">
        <label>
          <span>Pin offset X</span>
          <input type="number" step="0.001" data-calibration-field="offsetX" />
        </label>
        <label>
          <span>Pin offset Y</span>
          <input type="number" step="0.001" data-calibration-field="offsetY" />
        </label>
        <label>
          <span>Pin scale X</span>
          <input type="number" step="0.001" data-calibration-field="scaleX" />
        </label>
        <label>
          <span>Pin scale Y</span>
          <input type="number" step="0.001" data-calibration-field="scaleY" />
        </label>
      </div>
      </details>
      <label class="pin-calibrator__toggle">
        <input type="checkbox" data-calibration-show-pins />
        <span>Show pins on opening</span>
      </label>
      <div class="pin-calibrator__nudges" aria-label="Nudge pin projection">
        <button type="button" data-calibration-nudge="up">Up</button>
        <button type="button" data-calibration-nudge="left">Left</button>
        <button type="button" data-calibration-nudge="right">Right</button>
        <button type="button" data-calibration-nudge="down">Down</button>
      </div>
      <div class="pin-calibrator__actions">
        <button type="button" data-calibration-reset>Reset</button>
        <button type="button" data-calibration-copy>Copy report</button>
      </div>
      <textarea readonly spellcheck="false" aria-label="Pin calibration report"></textarea>
    </details>
  `;

  document.body.append(panel);

  const mapTransformInputs = [...panel.querySelectorAll("[data-map-transform-field]")];
  const pinOffsetInputs = [...panel.querySelectorAll("[data-pin-offset-id]")];
  const fieldInputs = [...panel.querySelectorAll("[data-calibration-field]")];
  const output = panel.querySelector("textarea");
  const showPinsInput = panel.querySelector("[data-calibration-show-pins]");
  const mapNudgeButtons = [...panel.querySelectorAll("[data-map-nudge]")];
  const nudgeButtons = [...panel.querySelectorAll("[data-calibration-nudge]")];
  const resetButton = panel.querySelector("[data-calibration-reset]");
  const copyButton = panel.querySelector("[data-calibration-copy]");

  const syncInputs = () => {
    mapTransformInputs.forEach((input) => {
      input.value = mapTransform[input.dataset.mapTransformField].toFixed(3);
    });
    pinOffsetInputs.forEach((input) => {
      const offset = pinOffsets[input.dataset.pinOffsetId] ?? { x: 0, z: 0 };
      input.value = offset[input.dataset.pinOffsetField].toFixed(3);
    });
    fieldInputs.forEach((input) => {
      input.value = modelMarkerProjection[input.dataset.calibrationField].toFixed(3);
    });
    showPinsInput.checked = showCalibrationPins;
    updateCalibrationOutput(output);
  };

  const persistProjection = () => {
    window.localStorage.setItem(calibrationStorageKey, JSON.stringify(modelMarkerProjection));
  };

  const persistMapTransform = () => {
    window.localStorage.setItem(mapTransformStorageKey, JSON.stringify(mapTransform));
  };

  const persistPinOffsets = () => {
    window.localStorage.setItem(pinOffsetsStorageKey, JSON.stringify(pinOffsets));
  };

  const applyMapTransformChange = (shouldSyncInputs = true) => {
    persistMapTransform();
    applyMapTransform();
    if (shouldSyncInputs) {
      syncInputs();
    } else {
      updateCalibrationOutput(output);
    }
  };

  const applyPinOffsetChange = (shouldSyncInputs = true) => {
    persistPinOffsets();
    updatePinPositions();
    if (shouldSyncInputs) {
      syncInputs();
    } else {
      updateCalibrationOutput(output);
    }
  };

  const applyProjectionChange = (shouldSyncInputs = true) => {
    persistProjection();
    updatePinPositions();
    if (shouldSyncInputs) {
      syncInputs();
    } else {
      updateCalibrationOutput(output);
    }
  };

  mapTransformInputs.forEach((input) => {
    input.addEventListener("input", () => {
      const value = Number.parseFloat(input.value);
      if (Number.isFinite(value)) {
        mapTransform = {
          ...mapTransform,
          [input.dataset.mapTransformField]: value,
        };
        applyMapTransformChange(false);
      }
    });
  });

  pinOffsetInputs.forEach((input) => {
    input.addEventListener("input", () => {
      const value = Number.parseFloat(input.value);
      if (Number.isFinite(value)) {
        const pinId = input.dataset.pinOffsetId;
        pinOffsets = {
          ...pinOffsets,
          [pinId]: {
            ...(pinOffsets[pinId] ?? { x: 0, z: 0 }),
            [input.dataset.pinOffsetField]: value,
          },
        };
        applyPinOffsetChange(false);
      }
    });
  });

  fieldInputs.forEach((input) => {
    input.addEventListener("input", () => {
      const value = Number.parseFloat(input.value);
      if (Number.isFinite(value)) {
        modelMarkerProjection = {
          ...modelMarkerProjection,
          [input.dataset.calibrationField]: value,
        };
        applyProjectionChange(false);
      }
    });
  });

  showPinsInput.addEventListener("change", () => {
    showCalibrationPins = showPinsInput.checked;
    updatePinStates();
    updatePinLabels();
    syncInputs();
  });

  mapNudgeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const step = event.shiftKey ? 0.025 : 0.25;
      const direction = button.dataset.mapNudge;
      mapTransform = {
        ...mapTransform,
        x: mapTransform.x + (direction === "left" ? -step : direction === "right" ? step : 0),
        z: mapTransform.z + (direction === "down" ? -step : direction === "up" ? step : 0),
      };
      applyMapTransformChange();
    });
  });

  nudgeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const step = event.shiftKey ? 0.001 : 0.01;
      const direction = button.dataset.calibrationNudge;
      modelMarkerProjection = {
        ...modelMarkerProjection,
        offsetX:
          modelMarkerProjection.offsetX +
          (direction === "left" ? -step : direction === "right" ? step : 0),
        offsetY:
          modelMarkerProjection.offsetY +
          (direction === "down" ? -step : direction === "up" ? step : 0),
      };
      applyProjectionChange();
    });
  });

  resetButton.addEventListener("click", () => {
    mapTransform = { ...defaultMapTransform };
    pinOffsets = structuredClone(defaultPinOffsets);
    modelMarkerProjection = { ...defaultModelMarkerProjection };
    window.localStorage.removeItem(mapTransformStorageKey);
    window.localStorage.removeItem(pinOffsetsStorageKey);
    window.localStorage.removeItem(calibrationStorageKey);
    applyMapTransform();
    applyPinOffsetChange(false);
    applyProjectionChange();
  });

  copyButton.addEventListener("click", async () => {
    updateCalibrationOutput(output);
    output.select();
    await navigator.clipboard?.writeText(output.value);
  });

  syncInputs();
  setupAxisGizmo();
}

function setupRenderer() {
  scene = new THREE.Scene();
  scene.background = null;

  camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const hemi = new THREE.HemisphereLight(0xf7ead0, 0x213c55, 2.25);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight(0xfff2c6, 3.6);
  sun.position.set(-4, 8, 5);
  scene.add(sun);

  const rim = new THREE.DirectionalLight(0x8ed4c9, 1.4);
  rim.position.set(5, 4, -3);
  scene.add(rim);

  modelRoot = new THREE.Group();
  scene.add(modelRoot);
}

function resizeRenderer() {
  if (!renderer || !camera) return;

  const rect = canvas.getBoundingClientRect();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(rect.width, rect.height, false);
  camera.aspect = rect.width / Math.max(rect.height, 1);
  camera.updateProjectionMatrix();
}

function showFallback(message = "Map unavailable.") {
  mapStage.classList.add("map-stage--failed");
  mapFallback.querySelector("strong").textContent = message;
  mapStatus.hidden = true;
}

async function loadMapModel() {
  setupRenderer();
  resizeRenderer();

  try {
    mapVisualRoot = await createMapPlane();
    modelRoot.add(mapVisualRoot);
    normalizeModel(mapVisualRoot);
    captureMapBaseTransform(mapVisualRoot);
    applyMapTransform();
    setupMapPins();
    setupPinCalibrationControls();
    frameInitialMap();
    hasModel = true;
    mapStage.classList.add("map-stage--ready");
    mapStatus.hidden = true;
  } catch (error) {
    console.error("Japan map texture failed to load", error);
    showFallback("2D map failed to load.");
  }
}

function findPanelAtReadingLine() {
  const readingLine = window.innerHeight * 0.5;
  const activePanel =
    panels.find((panel) => {
      const rect = panel.getBoundingClientRect();
      return rect.top <= readingLine && rect.bottom >= readingLine;
    }) ??
    [...panels].sort((firstPanel, secondPanel) => {
      const firstRect = firstPanel.getBoundingClientRect();
      const secondRect = secondPanel.getBoundingClientRect();
      const firstDistance = Math.abs(firstRect.top + firstRect.height / 2 - readingLine);
      const secondDistance = Math.abs(secondRect.top + secondRect.height / 2 - readingLine);

      return firstDistance - secondDistance;
    })[0];

  return activePanel;
}

function setupScrollObserver() {
  let ticking = false;

  const updateActivePanel = () => {
    ticking = false;

    if (window.scrollY < window.innerHeight * 0.45) {
      setActiveStop("overview");
      return;
    }

    const activePanel = findPanelAtReadingLine();
    if (activePanel?.dataset.stop) {
      setActiveStop(activePanel.dataset.stop);
    }
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateActivePanel);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  updateActivePanel();
}

function setupProgressNav() {
  progressButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelector(`.story-panel[data-stop="${button.dataset.stopTarget}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

function renderLoop() {
  window.requestAnimationFrame(renderLoop);

  if (!renderer || !camera || !hasModel) return;

  const cameraEase = reduceMotion ? 1 : 0.075;
  const targetEase = reduceMotion ? 1 : 0.09;

  camera.position.lerp(targetCamera, cameraEase);
  currentLookAt.lerp(targetLookAt, targetEase);
  camera.lookAt(currentLookAt);

  renderer.render(scene, camera);
  updatePinLabels();
  updateAxisGizmo();
}

document.body.dataset.activeStop = "overview";
mapTitle.classList.add("is-visible");
setupProgressNav();
setupScrollObserver();
loadMapModel();
window.addEventListener("resize", resizeRenderer);
renderLoop();
