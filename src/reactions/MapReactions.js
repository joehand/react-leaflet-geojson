'use strict';

import find from 'lodash/collection/find';
import geojsonExtent from 'geojson-extent';

import State from '../state/AppState';

// TODO: wtf! set this using the State.boundsoptions => map flashes and sucks.
const boundsOptions = {maxZoom: 14};

State
  .on('map:start', function(){
    const state = State.get();
    // Copy defaults to active props (otherwise all overwritten)
    state.set('mapProps', state.mapDefaults);
  })
;

State
  .on('map:fitBounds', function(){
    const state = State.get();
    const map = state.leafletElements.map;
    const activeId = state.mapData.activeFeatureId;

    let data;
    if (activeId === -1) {
      // Set bounds to active geojson layer
      // TODO: Do this using state.leafletElements.activeDataLayer;

      data = state.mapData.activeData;
    }
    else {
      // Set bounds to single active feature
      data = state.mapData.activeFeature;
    }
    const extent = geojsonExtent(data);
    const bounds = [
              [extent[1], extent[0]],
              [extent[3], extent[2]]
            ]
    map.fitBounds(bounds, boundsOptions);
  })
;

State
  .on('map:clickedFeature', function(feature, layer){
    // Updates styles, sets layer, and triggers set active feature
    const state = State.get()

    if ('_leaflet_id' in state.leafletElements.activeFeatureLayer) {
      // bit of a hack TODO
      const oldLayer = State.get().leafletElements.activeFeatureLayer;
      oldLayer.setStyle(oldLayer.defaultOptions.style);
      // TODO: should use oldLayer.resetStyle() but wasn't working.
    }
    if (layer){
      layer.setStyle(layer.highlightStyle);
    }
    state.leafletElements.set('activeFeatureLayer', layer);
    State.trigger('app:setActiveFeature', feature.id);
  })
;