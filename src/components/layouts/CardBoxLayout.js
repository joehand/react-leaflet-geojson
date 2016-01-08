'use strict';

import React from 'react';

import SettlementCards from './SettlementCards';
import SettlementListCards from './SettlementListCards';
import SearchComponent from '../SearchComponent';

require('styles/layouts/CardBoxLayout.scss');

class CardBoxLayout extends React.Component {
  render() {
    const state = this.props.state;
    return (
      <div className='cardbox-layout'>
        { (state.mapData.activeFeatureId !== -1) ?
          <SettlementCards
            cardStyle={this.props.cardStyle}
            data={state.mapData.activeFeature.properties}
            showServices={(state.showServices)}
            allServiceData={state.mapData.activeData.features}
            serviceData={state.activeServiceFeature} />
          :
          <div>
            <SearchComponent cardStyle={this.props.cardStyle}/>
            <SettlementListCards
              cardStyle={this.props.cardStyle}
              data={state.mapData.activeData} />
          </div>
        }
      </div>

    );
  }
}

CardBoxLayout.displayName = 'layouts.CardBoxLayout';

CardBoxLayout.propTypes = {
  cardStyle: React.PropTypes.object
};
CardBoxLayout.defaultProps = {
  cardStyle: {
    margin: '10px 0 15px 0'
  }
};

export default CardBoxLayout;
