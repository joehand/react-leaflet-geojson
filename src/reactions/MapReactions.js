'use strict';

import State from '../state/AppState';
import { getBoundsForFeature } from '../components/utils';

import geojsonExtent from 'geojson-extent';

State
  .on('map:setBounds', function(){
    const data = State.get().activeData.filtered;
    if (!data.features.length)
      return
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
    let title = '';
    if ('titleProp' in State.get().dataInfo) {
      let propName = State.get().dataInfo.titleProp;
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
      currentFeature : feature
    });
  })
;