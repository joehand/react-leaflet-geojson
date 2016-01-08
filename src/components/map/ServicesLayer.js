'use strict';

import React from 'react';
import Colors from 'material-ui/lib/styles/colors';

import GeoJsonUpdatable from './GeoJsonUpdatableComponent';
import State from '../../state/AppState';

const markerBaseStyle = {
  radius: 7,
  fillColor: Colors.blueGrey500,
  color: Colors.blueGrey500,
  weight: 1,
  opacity: 1,
  fillOpacity: 0.75
};

const markerWorkingStyle = {
  color: Colors.green500,
  weight: 1,
};

const markerBrokenStyle = {
  color: Colors.red500,
  weight: 2
};

const serviceWorkingKey = 'section_D/D3_Service_Status';
const serviceTypeKey = 'section_C/C1_Service_Type';

const markerTypeStyles = {
  'toilet' : {
    fillColor: Colors.deepOrange500,
  },
  'streelight' : {
    //fillColor: Colors.teal900,
    weight:1
  },
  'water_point' : {
    fillColor: Colors.blue500,
  }
}

function pointToLayer(feature, latlng) {
  let marker = new L.CircleMarker(latlng, markerBaseStyle);

  if (feature.properties[serviceWorkingKey] === 'working') {
    marker.setStyle(markerWorkingStyle);
  }
  else {
    marker.setStyle(markerBrokenStyle);
  }

  const serviceType = feature.properties[serviceTypeKey];
  marker.setStyle(markerTypeStyles[serviceType]);

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
