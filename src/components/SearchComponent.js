'use strict';

import React from 'react';
import TextField from 'material-ui/lib/text-field';
import FontIcon from 'material-ui/lib/font-icon';

import State from '../state/AppState';

require('styles/Search.scss');

class SearchComponent extends React.Component {

  filterData(event) {
    event.preventDefault();
    State.trigger('data:regexFilter',event.target.value);
  }

  render() {
    return (
      <div className="search-component">
          <TextField
            type="text"
            className="form-control"
            onChange={ this.filterData.bind(this) }
            placeholder="Search All"
            style={{margin:'0 auto'}}/>
      </div>
    );
  }
}

SearchComponent.displayName = 'SearchComponent';

// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
