'use strict';

import React from 'react';
import _ from 'lodash';

import Colors from 'material-ui/lib/styles/colors';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';

import State from '../state/AppState';

require('styles/Search.scss');

class SearchComponent extends React.Component {
  constructor() {
    super();
    this.filterData = _.throttle(this.filterData,750);
  }

  filterData(event) {
    State.trigger('data:regexFilter',event.target.value);
  }


  render() {
    return (
      <div>
        <Paper
          style={{margin:'10px', 'padding': '5px 15px'}}
        >
            <TextField
              type="text"
              className="form-control"
              onChange={ this.filterData.bind(this) }
              placeholder='Search...'
              underlineFocusStyle={{borderColor:Colors.blue500}}
              style={{margin:'0 auto', display:'block', width:'100%'}}/>
        </Paper>
      </div>
    );
  }
}

SearchComponent.displayName = 'SearchComponent';

// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
