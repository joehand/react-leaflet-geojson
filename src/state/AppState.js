'use strict';

import Freezer from 'freezer-js';

var state =  {
  status: 'ready',
  route: '/',
  pageTitle: 'GeoJson React Leaflet Map',
  dataUrl : 'https://gist.githubusercontent.com/joehand/f12cd626e2a54a146c8c/raw/46d6aa619a4817d9047f886490c4368800d32eeb/ghana.topo.json',
  dataTitleProp: 'example',
  dataFilterProp: 'example',
  mapDefaults: {
    center:[0,0],
    zoom:10,
    minZoom:11,
    maxZoom:15
  },
  mapTiles: {
    id: 'joeahand.jc5epc4l',
    accessToken: 'pk.eyJ1Ijoiam9lYWhhbmQiLCJhIjoiaDd1MEJZQSJ9.fl3WTCt8MGNOSCGR_qqz7A',
    url: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
};

// Returns the freezer instance with the state.
module.exports = new Freezer( state );