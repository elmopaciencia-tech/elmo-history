
gdjs.evtsExt__AnimationSystem__AnimationBehavior = gdjs.evtsExt__AnimationSystem__AnimationBehavior || {};

/**
 * Behavior generated from Animation Behavior
 */
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior = class AnimationBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from Animation Behavior
 */
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.SharedData = class AnimationBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AnimationSystem_AnimationBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AnimationSystem_AnimationBehaviorSharedData = new gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._AnimationSystem_AnimationBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext = {};
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.idToCallbackMap = new Map();
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final = [];

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4= [];


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(33228364);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Pulse")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Pulse")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), eventsFunctionContext.getArgument("width") * 2, eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), eventsFunctionContext.getArgument("height") / 2, eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= eventsFunctionContext.getArgument("width") + (eventsFunctionContext.getArgument("width") - 40));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(33232716);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Pulse")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Pulse")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), eventsFunctionContext.getArgument("width") / 2, eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), eventsFunctionContext.getArgument("height") * 2, eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(33236860);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Pulse")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(33239276);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Pulse")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Pulse")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (eventsFunctionContext.getArgument("height") / 2), eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (eventsFunctionContext.getArgument("width") * 2), eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= eventsFunctionContext.getArgument("width") + (eventsFunctionContext.getArgument("width") - 40));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(33243628);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Pulse")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Pulse")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (eventsFunctionContext.getArgument("height") * 2), eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (eventsFunctionContext.getArgument("width") / 2), eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(33247772);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Pulse")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Pulse")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (eventsFunctionContext.getArgument("height")), eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (eventsFunctionContext.getArgument("width")), eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) >= eventsFunctionContext.getArgument("width") - 0.01);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Pulse")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_PulseHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Pulse");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(33256220);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Breath")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Breath")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), eventsFunctionContext.getArgument("width") + 50, eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), eventsFunctionContext.getArgument("height") + 50, eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= eventsFunctionContext.getArgument("width") + 30);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(33260372);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Breath")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Breath")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), eventsFunctionContext.getArgument("width"), eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), eventsFunctionContext.getArgument("height"), eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= eventsFunctionContext.getArgument("width") + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(33264516);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Breath")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12516860);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Breath")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Breath")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), eventsFunctionContext.getArgument("width") + 50, eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), eventsFunctionContext.getArgument("height") + 50, eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= eventsFunctionContext.getArgument("width") + 30);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12473780);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Breath")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Breath")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), eventsFunctionContext.getArgument("width"), eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), eventsFunctionContext.getArgument("height"), eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) <= eventsFunctionContext.getArgument("width") + 0.03);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Breath")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_BreathHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Breath");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle()), -80, (eventsFunctionContext.getArgument("speed") / 2)), runtimeScene);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getAngle()) <= -60);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(33260700);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(gdjs.evtTools.common.lerp(-60, 80, eventsFunctionContext.getArgument("speed")), runtimeScene);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= 340 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setAngle(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle()), 360, 0.09));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= 359.9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")).setNumber(4);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setAngle(0);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle()), -80, (eventsFunctionContext.getArgument("speed") / 2)), runtimeScene);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getAngle()) <= -60);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17397124);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(gdjs.evtTools.common.lerp(-60, 80, eventsFunctionContext.getArgument("speed")), runtimeScene);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= 340 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setAngle(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle()), 360, 0.09));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getAngle() >= 360 - 0.03 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SmoothRotationHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Smooth rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_instant")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_instant")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(eventsFunctionContext.getArgument("speed") * 100, runtimeScene);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_instant")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_instant")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(eventsFunctionContext.getArgument("speed") * 100, runtimeScene);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= 360 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_instant")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_instant")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setAngle(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_instantRotationHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Instant rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("_").getChild("AnimationSystem").getChild("wobbleIntensity").setNumber(5);
}
{runtimeScene.getScene().getVariables().get("ObjectScale").setNumber(1);
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(26012420);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobble")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobble")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleX((Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobbleSpeed")))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_").getChild("AnimationSystem").getChild("wobbleIntensity"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ObjectScale")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleY((Math.cos((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobbleSpeed")))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_").getChild("AnimationSystem").getChild("wobbleIntensity"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ObjectScale")));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobbleSpeed")).add(eventsFunctionContext.getArgument("speed"));
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList16(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Wobble");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList17(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("_").getChild("AnimationSystem").getChild("wobbleIntensity2").setNumber(5);
}
{runtimeScene.getScene().getVariables().get("ObjectScale2").setNumber(1);
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(26285036);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobble2")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobble2")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleX((Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobbleSpeed2")))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_").getChild("AnimationSystem").getChild("wobbleIntensity2"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ObjectScale2")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleY((-(Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobbleSpeed2"))))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_").getChild("AnimationSystem").getChild("wobbleIntensity2"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ObjectScale2")));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobbleSpeed2")).add(eventsFunctionContext.getArgument("speed"));
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList19(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList21 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Wobble2");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList20(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList22 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("_").getChild("AnimationSystem").getChild("wobbleIntensity3").setNumber(5);
}
{runtimeScene.getScene().getVariables().get("ObjectScale3").setNumber(1);
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(22671876);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobble3")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobble3")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleX((Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobbleSpeed3")))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_").getChild("AnimationSystem").getChild("wobbleIntensity3"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ObjectScale3")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleY((Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobbleSpeed3")))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_").getChild("AnimationSystem").getChild("wobbleIntensity3"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ObjectScale3")));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_wobbleSpeed3")).add(eventsFunctionContext.getArgument("speed"));
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList23 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList22(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList24 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Wobble3");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList23(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList25 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationSpeed")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationSpeed")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(eventsFunctionContext.getArgument("speed") * 100, runtimeScene);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(24430940);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(24576892);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(24646772);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipX(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(24687516);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList26 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationSpeed")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationSpeed")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(eventsFunctionContext.getArgument("speed") * 100, runtimeScene);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= 360 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationSpeed")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationSpeed")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setAngle(0);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21288628);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21292476);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("IDrotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_3DRotationHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList27 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList25(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList26(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList28 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "3D rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList27(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList29 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21300804);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21304644);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21308180);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipX(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21312068);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList30 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21317612);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21321452);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationX")).setNumber(3);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_3DRotationXHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList31 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList29(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList30(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList32 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "3D rotation X");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList31(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList33 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21328620);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipY(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) >= eventsFunctionContext.getArgument("height"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21332460);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15998532);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipY(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) >= eventsFunctionContext.getArgument("height"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(16157124);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList34 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12383236);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].flipY(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getHeight()) >= eventsFunctionContext.getArgument("height"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12584988);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDRotationY")).setNumber(3);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_3DRotationYHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList35 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList33(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList34(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList36 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "3D rotation Y");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList35(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList37 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_DoorLoop")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_DoorLoop")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_DoorLoop")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(27252876);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_DoorLoop")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_DoorLoop")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_DoorLoop")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList38 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList37(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList39 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "3D door loop");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList38(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList40 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(34233996);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDOpenDoor")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDCloseDoor")).setNumber(100);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDOpenDoor")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= (0.3 * eventsFunctionContext.getArgument("width")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDOpenDoor")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(41591892);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDOpenDoor")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDOpenDoor")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (0.3 * eventsFunctionContext.getArgument("width") / 2), 0.03));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) <= (0.3 * eventsFunctionContext.getArgument("width")) + 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(24222116);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDOpenDoor")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDDoorIsOpen")).setNumber(2);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList41 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList40(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList42 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "3D open door");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList41(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList43 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDDoorIsOpen")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21295420);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDOpenDoor")).setNumber(100);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDCloseDoor")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDCloseDoor")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (1.3 * eventsFunctionContext.getArgument("width")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDCloseDoor")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21294444);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDCloseDoor")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDCloseDoor")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), eventsFunctionContext.getArgument("width"), 0.03));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) >= eventsFunctionContext.getArgument("width") - 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDCloseDoor")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21312396);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ThreeDDoorIsOpen")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList44 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList43(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList45 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "3D close door");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList44(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList46 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21299284);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_FloatY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - (eventsFunctionContext.getArgument("speed") * 10));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_FloatY"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) / 6));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + (eventsFunctionContext.getArgument("speed") * 10));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_FloatY"))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList47 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21334732);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_FloatY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - (eventsFunctionContext.getArgument("speed") * 10));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_FloatY"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) / 6));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + (eventsFunctionContext.getArgument("speed") * 10));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_FloatY"))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatUp")).setNumber(100);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FloatHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList48 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList46(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList47(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList49 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Float");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList48(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList50 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21297980);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransitionX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransitionY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_TriangleTransitionX"))) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_TriangleTransitionY"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_TriangleTransitionX"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList51 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21316716);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransitionX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransitionY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_TriangleTransitionX"))) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_TriangleTransitionY"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_TriangleTransitionX"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_TriangleTransitionX"))));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransition")).setNumber(100);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_TriangleTransitionHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList52 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList50(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList51(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList53 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Triangle transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList52(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList54 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21320556);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransitionX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransitionY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquareTransitionX"))) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquareTransitionY"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquareTransitionX"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquareTransitionY"))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")).setNumber(5);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList55 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(35826884);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransitionX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransitionY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquareTransitionX"))) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquareTransitionY"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquareTransitionX"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquareTransitionY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")).setNumber(5);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")).setNumber(6);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquareTransitionX"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransition")).setNumber(100);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquareTransitionHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList56 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList54(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList55(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList57 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Square transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList56(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList58 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(37037612);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransitionX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransitionY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_RhombusTransitionX"))) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_RhombusTransitionY"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) / 2)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_RhombusTransitionX"))));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_RhombusTransitionX"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_RhombusTransitionY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_RhombusTransitionX"))));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList59 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(37051996);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransitionX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransitionY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_RhombusTransitionX"))) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_RhombusTransitionY"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) / 2)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_RhombusTransitionX"))));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_RhombusTransitionX"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_RhombusTransitionY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_RhombusTransitionX"))));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransition")).setNumber(100);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RhombusTransitionHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList60 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList58(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList59(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList61 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Rhombus transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList60(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList62 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(31807412);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransitionX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransitionY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(5);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(6);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(7);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(8);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(9);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(10);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList63 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9357844);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransitionX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransitionY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(5);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(6);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(7);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(8);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(9);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(10);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionX"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_MazeTransitionY"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getHeight()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransition")).setNumber(100);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_MazeTransitionHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList64 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList62(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList63(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList65 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Maze transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList64(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList66 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() <= 255 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() == 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FadeLoop")) == 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FadeLoop")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FadeLoop")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setOpacity(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FadeLoop")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FadeLoop")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setOpacity(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FadeLoop")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FadeLoop")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList67 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList66(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList68 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Fade loop");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList67(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList69 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setOpacity(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FadeOutHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList70 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList69(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList71 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Fade out");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList70(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList72 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() <= 255 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setOpacity(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_FadeInHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList73 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList72(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList74 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Fade in");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList73(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList75 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(10255732);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretchY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), eventsFunctionContext.getArgument("width") * 2, eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), eventsFunctionContext.getArgument("height") / 2, eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= eventsFunctionContext.getArgument("width") + (eventsFunctionContext.getArgument("width") - 40));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(12405860);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), eventsFunctionContext.getArgument("width") / 2, eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), eventsFunctionContext.getArgument("height") * 2, eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 2 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 3 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 4 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= -200 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= -358 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretchY"))) - (gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()) * 3, eventsFunctionContext.getArgument("speed") * 1.4));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquashandStretchY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), eventsFunctionContext.getArgument("width"), eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), eventsFunctionContext.getArgument("height"), eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquashandStretchY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(-(eventsFunctionContext.getArgument("speed")) * 5000, runtimeScene);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), eventsFunctionContext.getArgument("height"), eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), eventsFunctionContext.getArgument("width"), eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() <= -200 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), eventsFunctionContext.getArgument("height"), eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), eventsFunctionContext.getArgument("width"), eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + (eventsFunctionContext.getArgument("speed") * 80));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() <= -358 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")).setNumber(5);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setAngle(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle()), -360, eventsFunctionContext.getArgument("speed") * 4));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretchY"))), eventsFunctionContext.getArgument("speed") * 5));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquashandStretchY"))) - 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -359 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setAngle(0);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList76 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17601092);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretchY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), eventsFunctionContext.getArgument("width") * 2, eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), eventsFunctionContext.getArgument("height") / 2, eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= eventsFunctionContext.getArgument("width") + (eventsFunctionContext.getArgument("width") - 40));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17651244);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), eventsFunctionContext.getArgument("width") / 2, eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), eventsFunctionContext.getArgument("height") * 2, eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 2 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 3 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 4 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= -200 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= -358 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretchY"))) - (gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()) * 3, eventsFunctionContext.getArgument("speed") * 1.4));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquashandStretchY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), eventsFunctionContext.getArgument("width"), eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), eventsFunctionContext.getArgument("height"), eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquashandStretchY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(-(eventsFunctionContext.getArgument("speed")) * 5000, runtimeScene);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), eventsFunctionContext.getArgument("height"), eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), eventsFunctionContext.getArgument("width"), eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -200 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), eventsFunctionContext.getArgument("height"), eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), eventsFunctionContext.getArgument("width"), eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + (eventsFunctionContext.getArgument("speed") * 80));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -358 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")).setNumber(5);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setAngle(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle()), -360, eventsFunctionContext.getArgument("speed") * 4));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretchY"))), eventsFunctionContext.getArgument("speed") * 5));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_SquashandStretchY"))) - 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getAngle() <= -359 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretch")).setNumber(100);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setAngle(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_SquashandStretchHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList77 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList75(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList76(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList78 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Squash & Stretch");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList77(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList79 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15172188);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].resetTimer("_.Animation system._Rainbow effect");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", 0.00000000000000000001) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("240;0;0");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2 / 2 / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2 / 2)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("255;132;0");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2 / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", ((eventsFunctionContext.getArgument("speed") / 2) / 2) * 1.5)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("247;255;0");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", ((eventsFunctionContext.getArgument("speed") / 2) / 2) * 1.5) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("48;242;0");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2 / 2 / 2 / 2 * (10))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("0;255;234");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2 / 2 / 2 / 2 * (10)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 4 * (3))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("0;102;255");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 4 * (3)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 4 * (3) * (1.1672))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("183;0;255");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 4 * (3) * (1.1672)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("235;135;255");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].resetTimer("_.Animation system._Rainbow effect");
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList80 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15190596);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].resetTimer("_.Animation system._Rainbow effect");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", 0.00000000000000000001) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("240;0;0");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2 / 2 / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2 / 2)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("255;132;0");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2 / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", ((eventsFunctionContext.getArgument("speed") / 2) / 2) * 1.5)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("247;255;0");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", ((eventsFunctionContext.getArgument("speed") / 2) / 2) * 1.5) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("48;242;0");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2 / 2 / 2 / 2 * (10))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("0;255;234");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 2 / 2 / 2 / 2 * (10)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 4 * (3))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("0;102;255");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 4 * (3)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 4 * (3) * (1.1672))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("183;0;255");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed") / 4 * (3) * (1.1672)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("235;135;255");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].timerElapsedTime("_.Animation system._Rainbow effect", eventsFunctionContext.getArgument("speed")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].pauseTimer("_.Animation system._Rainbow effect");
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_RainbowEffectHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList81 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList79(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList80(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList82 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Rainbow effect");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList81(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList83 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15212092);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(eventsFunctionContext.getArgument("speed") * 100, runtimeScene);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= 15 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(-(eventsFunctionContext.getArgument("speed")) * 100, runtimeScene);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -15 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList84 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(24627340);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(eventsFunctionContext.getArgument("speed") * 100, runtimeScene);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= 15 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(-(eventsFunctionContext.getArgument("speed")) * 100, runtimeScene);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -15 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")).setNumber(100);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")) == 100 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotateTowardAngle(0, eventsFunctionContext.getArgument("speed") * 100, runtimeScene);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotation")) == 100 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getAngle() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeRotationHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList85 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList83(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList84(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList86 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Shake rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList85(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList87 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(24225508);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontalX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_ShakeHorizontalX"))) + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_ShakeHorizontalX"))) - 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList88 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(22924908);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontalX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_ShakeHorizontalX"))) + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_ShakeHorizontalX"))) - 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_ShakeHorizontalX"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontal")).setNumber(100);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeHorizontalHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList89 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList87(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList88(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList90 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Shake horizontal");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList89(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList91 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15193676);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVerticalY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_ShakeVerticalY"))) - 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_ShakeVerticalY"))) + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList92 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(26229084);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVerticalY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_ShakeVerticalY"))) - 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_ShakeVerticalY"))) + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - (eventsFunctionContext.getArgument("speed")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_ShakeVerticalY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVertical")).setNumber(100);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_ShakeVerticalHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList93 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList91(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList92(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList94 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Shake vertical");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList93(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList95 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15175260);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotationX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_LineRotationX"))) + eventsFunctionContext.getArgument("width"));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - (eventsFunctionContext.getArgument("speed") / 3));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() - (eventsFunctionContext.getArgument("speed") / 3));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_LineRotationX"))) + eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - (eventsFunctionContext.getArgument("speed") / 3));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() - (eventsFunctionContext.getArgument("speed") / 3));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_LineRotationX"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + (eventsFunctionContext.getArgument("speed") / 3));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() + (eventsFunctionContext.getArgument("speed") / 3));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_LineRotationX"))) - eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + (eventsFunctionContext.getArgument("speed") / 3));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() + (eventsFunctionContext.getArgument("speed") / 3));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_LineRotationX"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList96 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15197732);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotationX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_LineRotationX"))) + eventsFunctionContext.getArgument("width"));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - (eventsFunctionContext.getArgument("speed") / 3));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() - (eventsFunctionContext.getArgument("speed") / 3));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_LineRotationX"))) + eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - (eventsFunctionContext.getArgument("speed") / 3));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() - (eventsFunctionContext.getArgument("speed") / 3));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_LineRotationX"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + (eventsFunctionContext.getArgument("speed") / 3));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() + (eventsFunctionContext.getArgument("speed") / 3));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_LineRotationX"))) - eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")).setNumber(4);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getArgument("speed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + (eventsFunctionContext.getArgument("speed") / 3));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() + (eventsFunctionContext.getArgument("speed") / 3));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("AnimationSystem").getChild("_LineRotationX"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotation")).setNumber(100);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LineRotationHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList97 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList95(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList96(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList98 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Line rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList97(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList99 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(23658308);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Land")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Land")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + (eventsFunctionContext.getArgument("speed") / 2));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() - (eventsFunctionContext.getArgument("speed") / 4));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= eventsFunctionContext.getArgument("width") + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Land")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Land")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Land")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - (eventsFunctionContext.getArgument("speed") / 2));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() + (eventsFunctionContext.getArgument("speed") / 4));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) <= eventsFunctionContext.getArgument("height"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Land")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Land")).setNumber(3);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), eventsFunctionContext.getArgument("width"), 1));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), eventsFunctionContext.getArgument("height"), 1));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) == eventsFunctionContext.getArgument("width"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getHeight()) == eventsFunctionContext.getArgument("height"));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_Land")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LandHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList100 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList99(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList101 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Land");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList100(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList102 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11891612);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColor")).setNumber(255);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColor")))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")))));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")) >= -254 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGBReset")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")).sub(eventsFunctionContext.getArgument("speed"));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")) <= -254 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGBReset")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGBReset")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")).add(eventsFunctionContext.getArgument("speed"));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")) >= -(eventsFunctionContext.getArgument("speed")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGBReset")).setNumber(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList103 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(39450796);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColor")).setNumber(255);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColor")))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")))));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")) >= -254 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGBReset")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")).sub(eventsFunctionContext.getArgument("speed"));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")) <= -254 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGBReset")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGBReset")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")).add(eventsFunctionContext.getArgument("speed"));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGB")) >= -(eventsFunctionContext.getArgument("speed")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthColorRGBReset")).setNumber(100);
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")).setNumber(100);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealth")) == 100 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("AnimationSystem").getChild("_LowHealthHasFinished")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList104 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList102(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("trigger");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList103(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList105 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("animations") == "Low health");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList104(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList106 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList11(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList15(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList18(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList21(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList24(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList28(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList32(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList36(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList39(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList42(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList45(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList49(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList53(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList57(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList61(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList65(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList68(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList71(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList74(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList78(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList82(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList86(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList90(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList94(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList98(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList101(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList105(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystem = function(animations, speed, width, height, trigger, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AnimationSystem"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AnimationSystem"),
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
if (argName === "animations") return animations;
if (argName === "speed") return speed;
if (argName === "width") return width;
if (argName === "height") return height;
if (argName === "trigger") return trigger;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList106(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].setScaleY(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__WobbleEffect").getChild("target_scale"))) * 2) - (gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].getScaleX()));
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].getScaleX() < 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].setScaleX(0.5);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].getScaleY() < 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].setScaleY(0.5);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("is_squishy_scale")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].setScale((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("target_scale"))));
}
}
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("scdx")).setNumber(gdjs.evtTools.common.lerp((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("scdx"))), (((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("target_scale"))) - (gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getScaleX())) * 0.5), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("scale_lerp")))));
}
}
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].setScaleX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getScaleX() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("scdx")))));
}
}

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("is_squishy_scale")) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("is_squishy_scale")).sub(1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AnimationSystem"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AnimationSystem"),
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

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;


return;
}

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("AnimationSystem::AnimationBehavior", gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior);
