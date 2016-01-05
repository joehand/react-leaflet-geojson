'use strict';

import React from 'react';

require('styles/layouts/DataDisplay.scss');

class DataDisplayComponent extends React.Component {
  render() {
    let properties;
    if ('feature' in this.props) {
        properties = this.props.feature.properties;
    }
    return (
      <div className="data-display">
        <div className="data-display-inner">
          {properties ?
              <pre>{JSON.stringify(properties, null, 2) }</pre>
              : null
          }
        </div>
      </div>
    );
  }
}

DataDisplayComponent.displayName = 'DataDisplay';

// DataDisplayComponent.propTypes = {};
// DataDisplayComponent.defaultProps = {};

export default DataDisplayComponent;
