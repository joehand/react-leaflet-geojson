'use strict';

import React from 'react';

import State from '../../state/AppState';
import TitleDisplayCard from '../cards/settlement/TitleDisplayCard';


class SettlementListCards extends React.Component {

  setActive(feature) {
    State.get().mapData.set('activeFeatureId', feature.id);
  }

  render() {
    const titleKey = 'section_B/B7_Settlement_Name_Community';
    // const title2Key = 'section_B/B8_Settlement_Name_Municipality';
    // const countryKey = 'section_B/B3_Country';
    const cityKey = 'section_B/B5_City';
    const self = this;

    return (
      <div className="settlementlist-cards cards">
        {this.props.data.features.map(function(feature){
            const title = feature.properties[titleKey];
            const city = feature.properties[cityKey]

            return (
              <TitleDisplayCard
                key={feature.properties._id}
                onClick={() => self.setActive(feature)}
                style={self.props.cardStyle}
                cardHeader={{title:title, subtitle:city}}/>
                );
        })}
      </div>
    );
  }
}

SettlementListCards.displayName = 'Layouts.SettlementListCards';

SettlementListCards.propTypes = {
  data: React.PropTypes.object,
  cardStyle: React.PropTypes.object
};
// SettlementListCards.defaultProps = {};

export default SettlementListCards;
