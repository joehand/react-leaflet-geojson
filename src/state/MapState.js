'use strict';

let mapState =  {
  mapDefaults: {
    center:[0,0],
    zoom:10,
    minZoom:4,
    maxZoom:18,
    minZoomBounds:10,
    maxZoomBounds:14
  },
  mapTiles: {
    id: 'joeahand.ok27om7m',
    accessToken: 'pk.eyJ1Ijoiam9lYWhhbmQiLCJhIjoiaDd1MEJZQSJ9.fl3WTCt8MGNOSCGR_qqz7A',
    url: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    attribution:'&copy; <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  mapControls: {
    zoomControl: {
      position: 'bottomleft'
    }
  }
};

export default mapState;