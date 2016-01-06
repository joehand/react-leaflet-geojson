'use strict';

import Freezer from 'freezer-js';

import mapState from './MapState';

// TODO: Does this work or do I need to worry about key collisions?
let state =  Object.assign(mapState, {
  status: 'ready',
  route: '/',
  pageTitle: 'GeoJson React Leaflet Map',
  dataInfo: {
    url: 'https://raw.githubusercontent.com/wrobstory/vincent_map_data/master/or_counties.topo.json',
    titleProp: 'COUNTY',
    filterProp: 'COUNTY'
  },
  featuresVisited: [],
  layout: {
    sidebar: 'closed' // why does this need to be an object/array to listen to?
  }
});

// Returns the freezer instance with the state.
export default new Freezer( state );