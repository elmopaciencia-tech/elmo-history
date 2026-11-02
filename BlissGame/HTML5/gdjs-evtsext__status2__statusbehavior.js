
gdjs.evtsExt__Status2__StatusBehavior = gdjs.evtsExt__Status2__StatusBehavior || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__Status2__StatusBehavior.StatusBehavior = class StatusBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Status2__StatusBehavior.StatusBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.StatusBehavior = behaviorData.StatusBehavior !== undefined ? behaviorData.StatusBehavior : "";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.StatusBehavior !== undefined)
      this._behaviorData.StatusBehavior = behaviorOverriding.StatusBehavior;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    StatusBehavior: this._behaviorData.StatusBehavior,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.StatusBehavior !== undefined)
      this._behaviorData.StatusBehavior = networkSyncData.props.StatusBehavior;
  }

  // Properties:
  
  _getStatusBehavior() {
    return this._behaviorData.StatusBehavior !== undefined ? this._behaviorData.StatusBehavior : "";
  }
  _setStatusBehavior(newValue) {
    this._behaviorData.StatusBehavior = newValue;
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__Status2__StatusBehavior.StatusBehavior.SharedData = class StatusBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Status2__StatusBehavior.StatusBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Status2_StatusBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Status2_StatusBehaviorSharedData = new gdjs.evtsExt__Status2__StatusBehavior.StatusBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._Status2_StatusBehaviorSharedData;
}

// Methods:

gdjs.evtsExt__Status2__StatusBehavior.StatusBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Status2::StatusBehavior", gdjs.evtsExt__Status2__StatusBehavior.StatusBehavior);
