/**
 * Mocking client-server processing
 */
'use strict';

import request from 'superagent';

//Fake Local Data

const TIMEOUT = 100;

const _localServicesData = require('json!./data/services.geojson');

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
