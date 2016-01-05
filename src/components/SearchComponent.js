'use strict';

import React from 'react';

import State from '../state/AppState';

require('styles/Search.scss');

class SearchComponent extends React.Component {

  filterData(event) {
    event.preventDefault();
    State.trigger('data:regexFilter',event.target.value);
    State.trigger('map:setBounds'); //TODO: make listener on map for layer changes
  }

  render() {
    return (
      <div className="search-component">
          <input
            type="text"
            className="form-control"
            onChange={ this.filterData.bind(this) }
            placeholder="Search" />
      </div>
    );
  }
}

SearchComponent.displayName = 'SearchComponent';

// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
