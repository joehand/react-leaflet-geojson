/**
 * Mocking client-server processing
 */
'use strict';

import request from 'superagent';


//Fake Local Data

const TIMEOUT = 100;

import geojsonMerge from 'geojson-merge';
const _localServicesData = require('json!./data/services.geojson');
const _localBoundaryData = require('json!./data/boundary.geojson');
const _allLocalData = geojsonMerge([_localServicesData,_localBoundaryData]);

exports.getActiveFeatureData = function (cb, timeout) {
    timeout = timeout || TIMEOUT;
    setTimeout(function () {
        cb(_localBoundaryData);
    }, timeout);
};

exports.getLocalServicesData = function (cb, timeout) {
    timeout = timeout || TIMEOUT;
    setTimeout(function () {
        cb(_localServicesData);
    }, timeout);
};

exports.getDataUrl = function (url, cb) {
  request
    .get(url)
    .accept('json')
    .end(function(err, res) {
      if(res.text) {
        cb(JSON.parse(res.text))
      }
    })
};
