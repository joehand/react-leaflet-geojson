'use strict';

import State from '../state/AppState';

require('./MapReactions');
require('./DataReactions');

/// Any other general actions

State
  .on('app:start', function () {
    State.get().set({status: 'loading'});
    State.trigger('data:fetch');
  })
;


State
  .on('app:ready', function () {
    State.get().set({status: 'ready'});
  })
;


