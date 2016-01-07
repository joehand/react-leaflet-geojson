'use strict';

// Source:
// https://github.com/open-austin/austingreenmap/blob/master/client/js/components/GeoJsonUpdatable.jsx
// License: public domain. Thanks!

import React from 'react';
import {GeoJson}  from 'react-leaflet';

import State from '../../state/AppState';

class GeoJsonUpdatable extends GeoJson {
  componentWillUpdate(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.leafletElement.clearLayers();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.leafletElement.addData(this.props.data);
    }
  }

  componentWillUnmount() {
    this.leafletElement.clearLayers();
    const map = State.get().leafletElements.map;
    map.removeLayer(this.leafletElement);
  }
}

GeoJsonUpdatable.displayName = 'GeoJsonUpdatable';

GeoJsonUpdatable.propTypes = {
  data: React.PropTypes.object.isRequired
};
// GeoJsonUpdatable.defaultProps = {};

export default GeoJsonUpdatable;
