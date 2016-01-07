require('normalize.css');
require('styles/App.scss');

import React from 'react';

import CircularProgress from 'material-ui/lib/circular-progress';

import CardBoxLayout from 'components/layouts/CardBoxLayout';
import MapComponent from 'components/map/MapComponent';
import State from '../state/AppState';

class AppComponent extends React.Component {

  componentWillMount () {
    // Set init map props
    const state = State.get()
    const mapProps = state.mapProps || state.mapPropsDefault;
    state.set('mapProps', mapProps);
  }

  componentDidMount () {
    // Everytime that the state is updated the app will re-render.
    // A real data driven app.
    State.on('update', () => this.forceUpdate() );

    let listener_data = State.get().mapData.getListener();
    listener_data.on('update', function(){
      State.trigger('app:updateDataView');
    });
  }

  render() {
    const state = State.get();
    console.log(state);

    if (state.status == 'loading')
      return (
        <div className="loading">
          <CircularProgress mode="indeterminate" color={"black"} size={2} />
        </div>
      );

    let sidebarOpen = false;
    if (state.appLayout.sidebar == 'open') {
      sidebarOpen = true;
    }

    return (
      <div className={sidebarOpen ?
          'main sidebar-open' : 'main sidebar-closed'}>
        <div className='header'>
          <h1>{state.pageTitle}</h1>
        </div>
        <div className="main-body">
          { sidebarOpen ?
            <CardBoxLayout
              state={state}
            /> : null
          }
          <div className="map-wrapper">
            <MapComponent
              data={state.mapData.activeData}
              mapProps={state.mapProps}
              mapTiles={state.mapTiles}
              mapControls={state.mapControls}
            />
          </div>
        </div>
      </div>
    );
  }
}

//AppComponent.propTypes = {};
//AppComponent.defaultProps = {};

export default AppComponent;
