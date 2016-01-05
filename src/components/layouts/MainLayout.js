'use strict';

import React from 'react';

import CurrentFeature from './DataDisplayComponent';
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
        <div className='header'>
          <h1>{state.pageTitle}</h1>
          { this.props.sidebarOpen ?
            null: <SearchComponent />
          }
        </div>
        { this.props.sidebarOpen ?
          <CurrentFeature feature={state.currentFeature} />
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
