'use strict';

import Freezer from 'freezer-js';

import mapState from './MapState';

// TODO: Does this work or do I need to worry about key collisions?
let state =  Object.assign(mapState, {
  status: 'ready',
  route: '/',
  pageTitle: 'KYC Mapping & Verification Tool',
  dataInfo: {
    url: 'https://gist.githubusercontent.com/joehand/f12cd626e2a54a146c8c/raw/c5400e62e8ce0421050b34b6f033f283870790be/ghana.topo.json',
    titleProp: 'section_B/B7_Settlement_Name_Community', // Prop key for map title display
    filterProp: 'section_B/B7_Settlement_Name_Community', // Prop key to search by
    idProp: '_id', // Id key for feature if they don't have ids
    topojsonKey: 'collection' // Key name for the topojson collection (TODO: get all collections?)
  },
  featuresVisited: [],
  appLayout: {
    sidebar: 'open', // TODO: better approach for this?
  },
  mapData: {
    activeFeatureId: 4373407, // -1 = no active feature
    activeFeature: {}, // GeoJson Object
    activeData: {}, // GeoJson Collection (filtered data, shown on map)
    defaultData: {}, // GeoJson Collection (full dataset)
    dataSources: {} // {url: geojson} TODO better way to store these
  },
  leafletElements: {
    activeFeatureLayer: {}, // Leaflet Layer for active feature
    activeDataLayer: {}, // Leaflet layer group for active geojson
    map: {} // Leaflet map element
  }
});

// Returns the freezer instance with the state.
export default new Freezer( state );