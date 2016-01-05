require('normalize.css');
require('styles/App.scss');

import React from 'react';

import MainLayout from 'components/layouts/MainLayout'
import MapComponent from 'components/map/MapComponent'
import State from '../state/AppState';

class AppComponent extends React.Component {

  componentDidMount () {
    // Everytime that the state is updated the app will re-render.
    // A real data driven app.
    State.on('update', () => this.forceUpdate() );
  }

  render() {
    let state = State.get();
    console.log(state);

    if (state.status == 'loading')
      return <div>Loading...</div>;

    let sidebarOpen = false;
    if ('layout' in state && state.layout.sidebar == 'open') {
      sidebarOpen = true;
    }

    const mapProps = state.mapProps || state.mapDefaults;

    return (
      <div className={sidebarOpen ?
          'main-container sidebar-open' : 'main-container sidebar-closed'}>
        <MainLayout state={state} sidebarOpen={sidebarOpen}/>
        <MapComponent
          data={state.activeData.filtered}
          mapProps={mapProps}
          mapTiles={state.mapTiles}
          mapControls={state.mapControls}
        />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
