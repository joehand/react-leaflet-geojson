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
    let state = State.get()
    let listener = state.dataLayers.getListener()

    listener.on('update', function( newState ){
      State.trigger('map:setBounds');
    });
  }

  render() {
    const borderLayerStyle = {
        color: 'rgb(56,158,70)',
        opacity: 1,
        weight: 1,
        fillColor: 'rgb(86,221,84)',
        fillOpacity: 0.4,
    };

    const dataLayers = this.props.data;
    const onEachFeature = this.onEachFeature;

    return (
      <Map id='map' ref='map'
        className="map-component"
        {...this.props.mapProps}>
        <TileLayer
          {...this.props.mapTiles}
        />
        {Object.keys(dataLayers).map(function(key) {
          return <GeoJsonUpdatable
                    key={key} data={dataLayers[key]}
                    onEachFeature={(feature, layer) => onEachFeature(feature, layer)}
                  />
         })}
      </Map>
    );
  }
}

MapComponent.displayName = 'MapMapComponent';

// Uncomment properties you need
// MapComponent.propTypes = {};
// MapComponent.defaultProps = {};

export default MapComponent;
