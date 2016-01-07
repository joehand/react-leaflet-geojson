'use strict';

import React from 'react';

import Colors from 'material-ui/lib/styles/colors';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

import State from '../../state/AppState';
import TitleDisplayCard from '../cards/settlement/TitleDisplayCard';


class SettlementListCards extends React.Component {

  setActive(feature) {
    console.log('active');
    State.get().set('currentFeature', feature);
  }

  render() {
    const titleKey = 'section_B/B7_Settlement_Name_Community';
    const title2Key = 'section_B/B8_Settlement_Name_Municipality';
    const countryKey = 'section_B/B3_Country';
    const cityKey = 'section_B/B5_City';
    const self = this;

    return (
      <div className="settlementlist-cards cards">
        {this.props.data.features.map(function(feature, i){
            const title = feature.properties[titleKey];
            const subtitle = (feature.properties[titleKey]===feature.properties[title2Key]) ? '' : feature.properties[title2Key];
            const city = feature.properties[cityKey]
            const country = feature.properties[countryKey]

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
