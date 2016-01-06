'use strict';

import React from 'react';

import DataDisplay from './DataDisplayComponent';
import SearchComponent from '../SearchComponent';

require('styles/layouts/Layout.scss');

class MainLayout extends React.Component {

  render() {
    let state = this.props.state;
    return (
      <div className={
          this.props.sidebarOpen ?
          'sidebar-open layout-component'
          : 'layout-component'
          }
        >
        { state.currentFeature ?
          null
          : <SearchComponent />
        }
        { this.props.sidebarOpen ?
          <DataDisplay
            currentFeature={state.currentFeature} />
          : null
        }
      </div>

    );
  }
}

MainLayout.displayName = 'MainLayout';

// MainLayout.propTypes = {};
// MainLayout.defaultProps = {};

export default MainLayout;
