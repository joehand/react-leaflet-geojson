/**
 * Mocking client-server processing
 */
'use strict';

import request from 'superagent';

// Fake Local Data
// const TIMEOUT = 100;
// Api.getLocal = function (cb, timeout) {
//     timeout = timeout || TIMEOUT;
//     setTimeout(function () {
//         cb(_localData);
//     }, timeout);
// };


exports.getDataUrls = function (urls, cb) {
    let url = urls[0];
    request
        .get(url)
        .accept('json')
        .end(function(err, res) {
          if(res.text) {
            cb(JSON.parse(res.text))
          }
        })
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
