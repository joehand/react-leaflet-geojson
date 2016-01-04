'use strict';

import baseConfig from './base';


let config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  resolveLoader: {
      packageMains: ['json-loader']
  }
};

export default Object.freeze(Object.assign({}, baseConfig, config));
