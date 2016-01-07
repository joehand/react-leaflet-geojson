'use strict';

import React from 'react';

import SettlementCards from './SettlementCards';
import SettlementListCards from './SettlementListCards';
import SearchComponent from '../SearchComponent';

require('styles/layouts/CardBoxLayout.scss');

class CardBoxLayout extends React.Component {
  render() {
    const state = this.props.state;
    const cardStyle = {
      margin: '10px 0 15px 0'
    };
    return (
      <div className='cardbox-layout'>
        { (Object.keys(state.currentFeature).length) ?
          <SettlementCards
            cardStyle={cardStyle}
            data={state.currentFeature.properties} />
          :
          <div>
            <SearchComponent cardStyle={cardStyle}/>
            <SettlementListCards
              cardStyle={cardStyle}
              data={state.activeData.filtered} />
          </div>
        }
      </div>

    );
  }
}

CardBoxLayout.displayName = 'layouts.CardBoxLayout';

// CardBoxLayout.propTypes = {};
// CardBoxLayout.defaultProps = {};

export default CardBoxLayout;
