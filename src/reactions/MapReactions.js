'use strict';

import State from '../state/AppState';
import { getBoundsForFeature } from '../components/utils';

import geojsonExtent from 'geojson-extent';

State
  .on('map:setBounds', function(){
    const data = State.get().activeData.filtered;
    const extent = geojsonExtent(data);
    const bounds = [
              [extent[1], extent[0]],
              [extent[3], extent[2]]
            ]
    State.get().set({
      mapProps: {
        bounds: bounds
      }
    });
  })
;

State
  .on('clicked:feature', function(feature){
    console.log(feature);

    State.get().mapProps.set({
      bounds: getBoundsForFeature(feature)
    });

    //TODO: Let's not do this...
    let name = '';
    if ('name' in feature.properties) {
      name = feature.properties.name;
    }
    else if ('title' in feature.properties) {
      name = feature.properties.title;
    }
    else {
      const obj = feature.properties;
      name = obj[Object.keys(obj)[0]];
    }

    let route = feature.id || name;

    State.get().set({
      route : route,
      pageTitle : name,
      currentFeature : feature
    });
  })
;