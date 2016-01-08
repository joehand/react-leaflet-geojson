'use strict';

import React from 'react';
import Colors from 'material-ui/lib/styles/colors';

import GeoJsonUpdatable from './GeoJsonUpdatableComponent';
import State from '../../state/AppState';

const markerBaseStyle = {
  radius: 7,
  fillColor: Colors.red500,
  color: Colors.black,
  weight: 1,
  opacity: 1,
  fillOpacity: 1
};

const markerWorkingStyle = {
  fillColor: Colors.green500,
  fillOpacity: 0.75
};

const markerBrokenStyle = {
  fillColor: Colors.red500,
  fillOpacity: 0.75
};

const serviceWorkingKey = 'section_D/D3_Service_Status';
const serviceTypeKey = 'section_C/C1_Service_Type';

function pointToLayer(feature, latlng) {
  let marker = new L.CircleMarker(latlng, markerBaseStyle);

  if (feature.properties[serviceWorkingKey] === 'working') {
    marker.setStyle(markerWorkingStyle);
  }
  else {
    marker.setStyle(markerBrokenStyle);
  }

  return marker;
}

function onEachFeature(feature, layer) {
  layer.on('click',
    State.trigger.bind(
      State, 'map:clickedService', feature, layer
    )
  );

  const popupOptions = {maxWidth: 200};
  layer.bindPopup("<b>Service Type:</b> " + feature.properties['section_C/C1_Service_Type'] +
                  "<br><b>Status: </b>" + feature.properties['section_D/D3_Service_Status'] ,popupOptions);
}

class ServicesLayer extends GeoJsonUpdatable {}

ServicesLayer.displayName = 'Map.ServicesLayer';

ServicesLayer.propTypes = {
  data: React.PropTypes.object
};

ServicesLayer.defaultProps = {
  pointToLayer: (feature, latlng) => pointToLayer(feature, latlng),
  onEachFeature: (feature, layer) => onEachFeature(feature, layer)
};

export default ServicesLayer;
