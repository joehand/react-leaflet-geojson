'use strict';

import React from 'react';

import Colors from 'material-ui/lib/styles/colors';
import FontIcon from 'material-ui/lib/font-icon';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

import FormLinksCard from '../cards/settlement/FormLinksCard';
import ProfileDataCard from '../cards/settlement/ProfileDataCard';
import TitleVerificationCard from '../cards/settlement/TitleVerificationCard';

require('styles/layouts/Settlement.scss');


class SettlementCards extends React.Component {
  render() {
    console.log(this.props);
    const titleKey = 'section_B/B7_Settlement_Name_Community';
    const title2Key = 'section_B/B8_Settlement_Name_Municipality';
    const countryKey = 'section_B/B3_Country';
    const cityKey = 'section_B/B5_City';
    const cardStyle = {
      margin: '10px 0 15px 0'
    };

    const title = this.props[titleKey];
    const subtitle = (this.props[titleKey]===this.props[title2Key]) ? '' : this.props[title2Key];
    const city = this.props[cityKey]
    const country = this.props[countryKey]


    return (
      <div className='settlement-data'>
        <TitleVerificationCard
          style={cardStyle}
          cardTitle={{title:title, subtitle:subtitle}}
          cardHeader={{title:city, subtitle:country}}/>
        <ProfileDataCard style={cardStyle} />
        <FormLinksCard style={cardStyle} />
      </div>
    );
  }
}

SettlementCards.displayName = 'Layouts.SettlementCards';

// Uncomment properties you need
// SettlementCards.propTypes = {};
// SettlementCards.defaultProps = {};

export default SettlementCards;
