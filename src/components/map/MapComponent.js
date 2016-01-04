'use strict';

import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import GeoJsonUpdatable from './GeoJsonUpdatableComponent';
import State from '../../state/AppState';

require('styles/map/Map.scss');


class MapComponent extends React.Component {

  onEachFeature(feature, layer) {
    layer.on('click', State.trigger.bind( State, 'clicked:feature', feature));
  }

  componentDidMount() {
    State.trigger('map:setBounds');
  }

  componentWillMount() {
    // let listener = this.props.data.getListener()

    // listener.on('update', function( newState ){
    //   State.trigger('map:setBounds');
    // });
  }

  render() {
    const borderLayerStyle = {
      color: 'rgb(56,158,70)',
      opacity: 1,
      weight: 1,
      fillColor: 'rgb(86,221,84)',
      fillOpacity: 0.4
    };

    const activeData = this.props.data;
    const onEachFeature = this.onEachFeature;

    return (
      <Map id='map' ref='map'
        className="map-component"
        {...this.props.mapProps}>
        <TileLayer
          {...this.props.mapTiles}
        />
        <GeoJsonUpdatable
            data={activeData}
            style={borderLayerStyle}
            onEachFeature={(feature, layer) => onEachFeature(feature, layer)}
          />
      </Map>
    );
  }
}

MapComponent.displayName = 'MapMapComponent';

// MapComponent.propTypes = {};
// MapComponent.defaultProps = {};

export default MapComponent;
