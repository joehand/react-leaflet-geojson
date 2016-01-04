'use strict';

import State from '../state/AppState';
import api from '../api/api';
import { getAllBounds,
    getBoundsForFeature, mergeAllDataLayers } from '../components/utils';

import topojson from 'topojson';

State
  .on('data:fetch', function(){
    const state = State.get();
    const url = state.dataUrl;
    api.getDataUrl(url, function(data) {
      console.log(data);
      // TODO support geojson + topojson

      // Topojson support:
      // TODO: objects.myKey will change for topojson files
      data = topojson.feature(data,data.objects.collection);

      // Geojson support:
      // data = data WHOA!

      if ('sourceData' in state) {
          state.sourceData.set(url, data);
      } else {
          const obj = {}
          obj[url] = data
          state.set('sourceData', obj);
      }
      State.trigger('data:combineLayes');
    });
  })
;

State
  .on('data:combineLayes', function(){
    const state = State.get()
    const layers = mergeAllDataLayers(state.sourceData);
    state.set('activeData', {'default':layers, 'filtered':layers});

    State.trigger('app:ready'); //TODO move this out
  })
;

State
  .on('data:regexFilter', function(val){
    const state = State.get()
    const data = state.activeData.default;

    const regex = new RegExp(val, 'i');
    const filteredData = data.features.filter(function(datum) {

      //TODO: Let's not do this...
      let name = '';
      if('name' in datum.properties) {
        return name = datum.properties.name;
      }
      else if ('title' in datum.properties) {
        return name = datum.properties.title;
      }
      else {
            const obj = datum.properties;
            name = obj[Object.keys(obj)[0]];
      }
        return (name.search(regex) > -1);
    });

    let filtered = {
        features: filteredData,
        type:data.type
    }
    state.activeData.set('filtered', filtered);
  })
;


