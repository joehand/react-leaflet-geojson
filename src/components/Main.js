require('normalize.css');
require('styles/App.scss');

import React from 'react';

import MapComponent from 'components/map/MapComponent'
import State from '../state/AppState';

class AppComponent extends React.Component {

  componentDidMount () {
    // Everytime that the state is updated the app will re-render.
    // A real data driven app.
    State.on('update', () => this.forceUpdate() );
  }

  filterData(event) {
    event.preventDefault();
    State.trigger('data:regexFilter',event.target.value);
    State.trigger('map:setBounds');
  }

  render() {
    let state = State.get();

    if (state.status == 'loading')
      return <div>Loading...</div>;

    const mapProps = state.mapProps || state.mapDefaults;

    console.log(state);

    return (
      <div className='index'>
        <div className='flex-box'>
          <div className='row'>
            <div className='flex-item'>
              <h1>{state.pageTitle}</h1>
              <input
                type="text"
                className="form-control"
                onChange={ this.filterData.bind(this) }
                placeholder="Search" />
            </div>
          </div>
        </div>

        <MapComponent
          data={state.activeData.filtered}
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
