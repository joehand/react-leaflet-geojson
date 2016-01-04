'use strict';

// Source:
// https://github.com/open-austin/austingreenmap/blob/master/client/js/components/GeoJsonUpdatable.jsx
// License: public domain. Thanks!

import React from 'react';
import {GeoJson}  from 'react-leaflet';

class GeoJsonUpdatable extends GeoJson {
  componentWillReceiveProps(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.leafletElement.clearLayers();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.leafletElement.addData(this.props.data);
    }
  }
}

GeoJsonUpdatable.displayName = 'GeoJsonUpdatable';

GeoJsonUpdatable.propTypes = {
  data: React.PropTypes.object.isRequired
};
// GeoJsonUpdatable.defaultProps = {};

export default GeoJsonUpdatable;
