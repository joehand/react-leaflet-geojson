'use strict';

import Freezer from 'freezer-js';

var state =  {
    status: 'ready',
    route: '/',
    pageTitle: 'GeoJson React Leaflet Map',
    dataUrls : [
        'https://gist.githubusercontent.com/phil-pedruco/10447085/raw/426fb47f0a6793776a044f17e66d17cbbf8061ad/countries.geo.json',
        'https://gist.githubusercontent.com/PaulinePro/10130467/raw/7c75eb6fca3cde7bec641a8f8d85303f54e3974e/sf.geojson',
    ],
    dataLayers : {},
    mapDefaults: {
        center:[0,0],
        zoom:10,
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