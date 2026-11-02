
gdjs.evtsExt__TVLine1__TVLine1Behavior = gdjs.evtsExt__TVLine1__TVLine1Behavior || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__TVLine1__TVLine1Behavior.TVLine1Behavior = class TVLine1Behavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TVLine1__TVLine1Behavior.TVLine1Behavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.AutoTyping = behaviorData.AutoTyping !== undefined ? behaviorData.AutoTyping : "";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.AutoTyping !== undefined)
      this._behaviorData.AutoTyping = behaviorOverriding.AutoTyping;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    AutoTyping: this._behaviorData.AutoTyping,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.AutoTyping !== undefined)
      this._behaviorData.AutoTyping = networkSyncData.props.AutoTyping;
  }

  // Properties:
  
  _getAutoTyping() {
    return this._behaviorData.AutoTyping !== undefined ? this._behaviorData.AutoTyping : "";
  }
  _setAutoTyping(newValue) {
    this._behaviorData.AutoTyping = newValue;
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__TVLine1__TVLine1Behavior.TVLine1Behavior.SharedData = class TVLine1BehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TVLine1__TVLine1Behavior.TVLine1Behavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TVLine1_TVLine1BehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TVLine1_TVLine1BehaviorSharedData = new gdjs.evtsExt__TVLine1__TVLine1Behavior.TVLine1Behavior.SharedData(
      initialData
    );
  }
  return instanceContainer._TVLine1_TVLine1BehaviorSharedData;
}

// Methods:
gdjs.evtsExt__TVLine1__TVLine1Behavior.TVLine1Behavior.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__TVLine1__TVLine1Behavior.TVLine1Behavior.prototype.doStepPreEventsContext.idToCallbackMap = new Map();


gdjs.evtsExt__TVLine1__TVLine1Behavior.TVLine1Behavior.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};

gdjs.evtsExt__TVLine1__TVLine1Behavior.TVLine1Behavior.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "AutoTyping": this._getAutoTyping()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TVLine1"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TVLine1"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};


gdjs.evtsExt__TVLine1__TVLine1Behavior.TVLine1Behavior.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);


return;
}


gdjs.registerBehavior("TVLine1::TVLine1Behavior", gdjs.evtsExt__TVLine1__TVLine1Behavior.TVLine1Behavior);
