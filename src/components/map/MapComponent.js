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
    layer._leaflet_id = feature.id;
    layer.on('click', State.trigger.bind(
        State, 'map:clickedFeature', feature, layer
      )
    );
    if (feature.id === State.get().mapData.activeFeatureId) {
      State.trigger('map:clickedFeature', feature, layer);
    }
  }

  resizeMap() {
    const map = this.refs.map.getLeafletElement();
    map.invalidateSize();
  }

  componentDidMount() {
    const map = this.refs.map.getLeafletElement();
    State.get().leafletElements.set('map', map);

    State.trigger('map:fitBounds');
  }

  componentWillMount() {
    const self = this;
    let state = State.get();

    // //TODO: move this?
    // // ? call a State.trigger(map:resize) directly from layout
    // let listener_layout = state.appLayout.getListener();
    // listener_layout.on('update', function(){
    //   self.resizeMap();
    // });

    // let listener_data = state.mapData.activeData.getListener();
    // listener_data.on('update', function(){
    //   self.triggerSetBounds();
    // });

  }

  render() {
    return (
      <Map id='map' ref='map'
        className='map-component'
        {...this.props.mapProps}>
        <TileLayer
          {...this.props.mapTiles}
        />
        <GeoJsonUpdatable
            ref='geojson'
            data={this.props.data}
            style={defaultStyle}
            onEachFeature={(feature, layer) => this.onEachFeature(feature, layer)}
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

MapComponent.propTypes = {
  mapProps: React.PropTypes.object,
  mapTiles: React.PropTypes.object,
  mapControls:  React.PropTypes.object,
  data: React.PropTypes.object
};

MapComponent.defaultProps = {
  mapProps: {
    center:[0,0],
    zoom:3,
    zoomControl: false
  }
};

export default MapComponent;
