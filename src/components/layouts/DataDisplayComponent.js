'use strict';

import React from 'react';

import SettlementData from './SettlementDataComponent'

require('styles/layouts/DataDisplay.scss');

class DataDisplayComponent extends React.Component {
  render() {
    //TODO Show current selected feature vs general data (e.g. search results)
    let properties = this.props.currentFeature.properties;
    return (
      <div className="data-display">
        <div className="data-display-inner">
          {properties ?
            <SettlementData {...properties} />
          : null }
        </div>
      </div>
    );
  }
}

DataDisplayComponent.displayName = 'DataDisplay';

// DataDisplayComponent.propTypes = {};
DataDisplayComponent.defaultProps = {
  currentFeature: {
    properties: null
  }
};

export default DataDisplayComponent;
