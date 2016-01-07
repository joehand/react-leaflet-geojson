'use strict';

import State from '../state/AppState';

require('./MapReactions');
require('./DataReactions');

/// Any other general actions

State
  .on('app:start', function () {
    State.get().set({status: 'loading'});
    State.trigger('map:start');
    State.trigger('data:fetch');
  })
;


State
  .on('app:ready', function () {
    State.get().set({status: 'ready'});
  })
;

State
  .on('app:updateDataView', function () {
    // TODO: right now this runs before map is mounted so we can't set bounds initially
    console.info('updating data view');
    const mapData = State.get().mapData
    if (mapData.activeFeatureId > 0) {
      if (mapData.activeFeature.id) {
        State.trigger('map:fitBounds');
      }
      else {
        State.trigger('app:setActiveFeature', mapData.activeFeatureId)
      }
    }
    else if ('regexFilterVal' in State.get()) {
      // hack TODO
      State.trigger('map:fitBounds');
    }
  })
;


State
  .on('app:setActiveFeature', function(featureId){
    const state = State.get();
    const feature = state.mapData.defaultData.features.find(function(obj){
        return obj.id == featureId;
      }
    );

    //TODO: Let's not do this...
    let title = '';
    if ('titleProp' in state.dataInfo) {
      let propName = state.dataInfo.titleProp;
      title = feature.properties[propName];
    }
    else if ('name' in feature.properties) {
      title = feature.properties.title;
    }
    else if ('title' in feature.properties) {
      title = feature.properties.title;
    }

    const route = 'settlement.' + feature.id;

    State.get().mapData.set({
      'activeFeature' : feature,
      'activeFeatureId' : feature.id
    });
    State.get().set({
      route : route,
      pageTitle : title,
    });

    state.featuresVisited.push(route);
    state.appLayout.set('sidebar', 'open');


  })
;

