'use strict';

import State from '../state/AppState';
import api from '../api/api';
import { mergeAllDataLayers } from '../components/utils';

import topojson from 'topojson';

State
  .on('data:ready', function(){
    State.trigger('app:ready');
  })
;

State
  .on('data:fetch', function(){
    const state = State.get();
    const dataInfo = state.dataInfo;
    const url = dataInfo.url;
    api.getDataUrl(url, function(data) {
      // TODO support geojson + topojson
      // Topojson support:
      data = topojson.feature(data,data.objects[dataInfo.topojsonKey]);
      // Geojson support:
      // data = data WHOA!

      if (!('id' in data.features[0])) {
        // add ids
        if ('idProp' in dataInfo) {
          // TODO: this slows things down quite a bit.
          let features = data.features.map(function(feature, i) {
            feature.id = feature.properties._id;
            return feature
          });
          data.features = features;
        }
        else {
          console.error('Need to set ID property in MapState.dataInfo');
        }
      }

      state.mapData.dataSources.set(url, data);
      State.trigger('data:combineLayes');
      State.trigger('data:ready');
    });
  })
;

State
  .on('data:combineLayes', function(){
    const state = State.get()
    const allData = mergeAllDataLayers(state.mapData.dataSources);
    state.mapData.pivot()
      .defaultData.set(allData)
      .activeData.set(allData);
  })
;

State
  .on('data:regexFilter', function(searchVal){
    State.get().set('regexFilterVal', searchVal).now();

    const state = State.get()
    const allData = state.mapData.defaultData;

    if (searchVal) {
      const regex = new RegExp(searchVal, 'i');
      const filteredData = allData.features.filter(function(feature) {

        //TODO: Let's not do this...
        let searchText = ''; // Make sure it is string by adding
        if ('filterProp' in State.get().dataInfo) {
          let propName = State.get().dataInfo.filterProp;
          searchText += feature.properties[propName];
        }
        else if ('title' in feature.properties) {
          searchText += feature.properties.title;
        }
        else {
          const obj = feature.properties;
          searchText += obj[Object.keys(obj)[0]];
        }
        return (searchText.search(regex) > -1);
      });

      let filtered = {
          features: filteredData,
          type:allData.type
      }

      if (!filteredData.length) {
        //TODO: Deal with no results
        state.set('pageTitle', 'No Results');
      }
      else if (filteredData.length == 1) {
        state.set('pageTitle', '1 Search Result'); //TODO: Use title
        state.mapData.set('activeFeatureId', filteredData[0].id)
      }
      else {
        const pageTitle = filteredData.length + ' Search Results';
        state.set('pageTitle', pageTitle);
      }
      state.mapData.set('activeData', filtered);
    }
    else {
      // No Search - Show All Data
      state.set('pageTitle', 'Search...');
      state.mapData.set('activeData', allData);
    }
  })
;


State
  .on('data:fetchActiveFeatureData', function(){
    api.getActiveFeatureData(function(data) {
      const state = State.get();
      console.log(data);
      //state.mapData.activeFeatureId;
      State.get().mapData.set({
        'activeFeature' : data.features[0]
      });
    });
  })
;

State
  .on('data:fetchServicesData', function(){
    api.getLocalServicesData(function(data) {
      const state = State.get();

      state.set('showServices', true);
      state.mapData.set('activeData', data);
      State.trigger('map:fitBounds',{maxZoom: 20, padding:[0,0]});
    });
  })
;

