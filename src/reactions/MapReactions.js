'use strict';

import State from '../state/AppState';
import { getBoundsForFeature } from '../components/utils';

import geojsonExtent from 'geojson-extent';

const boundsOptions = {
          minZoom: State.get().mapDefaults.minZoomBounds,
          maxZoom: State.get().mapDefaults.maxZoomBounds
        }

State
  .on('map:setBounds', function(inData){
    const data = inData || State.get().activeData.filtered;
    if ('features' in data && !data.features.length)
      return
    const extent = geojsonExtent(data);
    const bounds = [
              [extent[1], extent[0]],
              [extent[3], extent[2]]
            ]
    State.get().set({
      mapProps: {
        bounds: bounds,
        boundsOptions: boundsOptions
      }
    });
  })
;

State
  .on('clicked:feature', function(feature, layer){
    const state = State.get()

    if ('currentLayer' in state) {
      const oldLayer = State.get().currentLayer;
      oldLayer.setStyle(oldLayer.defaultOptions.style);
      // TODO: should use oldLayer.resetStyle() but wasn't working.
    }
    if (layer){
      layer.setStyle(layer.highlightStyle);
    }

    state.mapProps.set({
      bounds: getBoundsForFeature(feature),
      boundsOptions: boundsOptions
    });

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