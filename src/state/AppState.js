'use strict';

import Freezer from 'freezer-js';

import mapState from './MapState';

// TODO: Does this work or do I need to worry about key collisions?
let state =  Object.assign(mapState, {
  status: 'ready',
  route: '/',
  pageTitle: 'GeoJson React Leaflet Map',
  dataInfo: {
    url: 'https://gist.githubusercontent.com/joehand/f12cd626e2a54a146c8c/raw/c5400e62e8ce0421050b34b6f033f283870790be/ghana.topo.json',
    titleProp: 'section_B/B7_Settlement_Name_Community',
    filterProp: 'section_B/B7_Settlement_Name_Community'
  },
  featuresVisited: [],
  layout: {
    sidebar: 'closed' // why does this need to be an object/array to listen to?
  }
});

// Returns the freezer instance with the state.
export default new Freezer( state );