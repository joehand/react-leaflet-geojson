'use strict';

import React from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';

import GeoJsonUpdatable from './GeoJsonUpdatableComponent';
import State from '../../state/AppState';

require('styles/map/Map.scss');

const defaultStyle = {
  color: '#000',
  opacity: 0.5,
  weight: 1,
  fillColor: '#0cb577',
  fillOpacity: 0.7
};

const highlightStyle = {
  color: '#2262CC',
  opacity: 0.6,
  weight: 3,
  fillColor: '#2262CC',
  fillOpacity: 0.65
};

class MapComponent extends React.Component {

  onEachFeature(feature, layer) {
    layer.highlightStyle = highlightStyle;
    layer.on('click', State.trigger.bind( State, 'clicked:feature', feature, layer));
  }

  resizeMap() {
    let map = this.refs.map.getLeafletElement();
    map.invalidateSize();
  }

  componentDidMount() {
    State.trigger('map:setBounds');
  }

  componentWillMount() {
    const self = this;
    let state = State.get();
    let listener = state.layout.getListener();

    //TODO: move this.
    // should call a State.trigger(map:resize) directly from layout
    listener.on('update', function( newState ){
      self.resizeMap();
    });
  }

  render() {
    const activeData = this.props.data;
    const onEachFeature = this.onEachFeature;

    return (
      <Map id='map' ref='map'
        className='map-component'
        zoomControl={false}
        {...this.props.mapProps}>
        <TileLayer
          {...this.props.mapTiles}
        />
        <GeoJsonUpdatable
            data={activeData}
            style={defaultStyle}
            onEachFeature={(feature, layer) => onEachFeature(feature, layer)}
          />
        { this.props.mapControls.zoomControl ?
          <ZoomControl {...this.props.mapControls.zoomControl} />
          : null
        }
      </Map>
    );
  }
}

MapComponent.displayName = 'MapComponent';

// MapComponent.propTypes = {};
// MapComponent.defaultProps = {};

export default MapComponent;
