import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/Main';
import State from './state/AppState';

require('./reactions/AppReactions');
State.trigger('app:start');

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
