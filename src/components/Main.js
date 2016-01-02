require('normalize.css');
require('styles/App.css');

import React from 'react';
import { Map, TileLayer, CircleMarker } from 'react-leaflet';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Map id='map' ref='map'
          className="map-component"
          center={[30.267153, -97.743061]}
          zoom={12} minZoom={5} maxZoom={19}>
          <TileLayer
            minZoom={5} maxZoom={19}
            url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <CircleMarker center={[30.267153, -97.743061]}/>
        </Map>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
