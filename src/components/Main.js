require('normalize.css');
require('styles/App.css');

import React from 'react';

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

    if (state.status == 'loading')
      return <div>Loading...</div>;

    const mapProps = state.mapProps || state.mapDefaults;

    console.log(state);
    return (
      <div className='index'>
        <h1>{state.pageTitle}</h1>
        <h3>
        </h3>
        <MapComponent
          data={state.dataLayers}
          mapProps={mapProps}
          mapTiles={state.mapTiles}
        />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
