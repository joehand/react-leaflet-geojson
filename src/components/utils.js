'use strict';

import values from 'lodash/object/values';
import turfExtent from 'turf-extent';
import geojsonMerge from 'geojson-merge';


function mergeAllDataLayers(geojsonLayers) {
  const layers = values(geojsonLayers);
  return geojsonMerge(layers);
}

function getBoundsForFeature(geoJson) {
  const extent = turfExtent(geoJson);
  return [
    [extent[1], extent[0]],
    [extent[3], extent[2]]
  ];
}

function getAllBounds(geojsonLayers) {
  // could use this too: https://github.com/mapbox/geojson-extent
  const geojson = Utils.mergeAllDataLayers(geojsonLayers);
  return Utils.getBoundsForFeature(geojson);
}

module.exports = {
  mergeAllDataLayers,
  getBoundsForFeature,
  getAllBounds
}