'use strict';

import State from '../state/AppState';

require('./MapReactions');
require('./DataReactions');

/// Any other general actions

State
    .on('app:start', function (data) {
        State.get().set({status: 'loading'});
        State.trigger('data:fetch');
    })
;


State
    .on('app:ready', function (data) {
        State.get().set({status: 'ready'});
    })
;


