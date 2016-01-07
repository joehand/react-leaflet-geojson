require('normalize.css');
require('styles/App.scss');

import React from 'react';

import CardBoxLayout from 'components/layouts/CardBoxLayout';
import MapComponent from 'components/map/MapComponent';
import SearchComponent from './SearchComponent';
import State from '../state/AppState';

class AppComponent extends React.Component {

  componentDidMount () {
    // Everytime that the state is updated the app will re-render.
    // A real data driven app.
    State.on('update', () => this.forceUpdate() );
  }

  render() {
    let state = State.get();

    if (state.status == 'loading')
      return (
        <div className="loading">
          Loading...
        </div>
      );

    let sidebarOpen = false;
    if ('layout' in state && state.layout.sidebar == 'open') {
      sidebarOpen = true;
    }

    const mapProps = state.mapProps || state.mapDefaults;

    return (
      <div className={sidebarOpen ?
          'main sidebar-open' : 'main sidebar-closed'}>
        <div className='header'>
          <h1>{state.pageTitle}</h1>
        </div>
        <div className="main-body">
          <CardBoxLayout state={state} sidebarOpen={sidebarOpen}/>
          <MapComponent
            data={state.activeData.filtered}
            mapProps={mapProps}
            mapTiles={state.mapTiles}
            mapControls={state.mapControls}
          />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
