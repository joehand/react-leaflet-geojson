'use strict';

import State from '../state/AppState';
import { getBoundsForFeature } from '../components/utils';

import geojsonExtent from 'geojson-extent';

// TODO: wtf! set this using the State.boundsoptions => map flashes and sucks.
const boundsOptions = {maxZoom: 14};

State
  .on('map:start', function(inData){
    const state = State.get();
    // Copy defaults to active props (otherwise all overwritten)
    state.set('mapProps', state.mapDefaults);
  })
;

State
  .on('map:setBounds', function(map, layer){
    const state = State.get();
    if (layer) {
      map.fitBounds(layer.getBounds(), boundsOptions);
    } else {
      const data = state.activeData.filtered;
      if ('features' in data && !data.features.length)
        return
      const extent = geojsonExtent(data);
      const bounds = [
                [extent[1], extent[0]],
                [extent[3], extent[2]]
              ]
      map.fitBounds(bounds, boundsOptions);
    }
  })
;

State
  .on('clicked:feature', function(map, feature, layer){
    const state = State.get()

    if ('currentLayer' in state) {
      const oldLayer = State.get().currentLayer;
      oldLayer.setStyle(oldLayer.defaultOptions.style);
      // TODO: should use oldLayer.resetStyle() but wasn't working.
    }
    if (layer){
      layer.setStyle(layer.highlightStyle);
    }

    State.trigger('map:setBounds', map, layer);

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

    let route = feature.id || title;

    State.get().set({
      route : route,
      pageTitle : title,
      currentFeature : feature,
      currentLayer: layer
    });

    state.featuresVisited.push(route);
    state.layout.set('sidebar', 'open');
  })
;