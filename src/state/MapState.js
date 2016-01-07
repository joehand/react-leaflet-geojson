'use strict';

let mapState =  {
  mapProps: {}, // active map props
  mapPropsDefault: { // passed as initial map props
    minZoom:5,
    maxZoom:18,
    boundsOptions : {
      maxZoom:14
    },
    zoomControl: false // moving position
  },
  mapTiles: {
    id: 'joeahand.ok27om7m',
    accessToken: 'pk.eyJ1Ijoiam9lYWhhbmQiLCJhIjoiaDd1MEJZQSJ9.fl3WTCt8MGNOSCGR_qqz7A',
    url: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    attribution:'&copy; <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  mapControls: {
    zoomControl: {
      position: 'bottomright'
    }
  }
};

export default mapState;