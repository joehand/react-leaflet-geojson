'use strict';

import React from 'react';

import BoundaryDataCard from '../cards/settlement/BoundaryDataCard';
import FormLinksCard from '../cards/settlement/FormLinksCard';
import ProfileDataCard from '../cards/settlement/ProfileDataCard';
import TitleVerificationCard from '../cards/settlement/TitleVerificationCard';


class SettlementCards extends React.Component {
  render() {
    const props = this.props.data;
    // TODO: move these
    const titleKey = 'section_B/B7_Settlement_Name_Community';
    const title2Key = 'section_B/B8_Settlement_Name_Municipality';
    const countryKey = 'section_B/B3_Country';
    const cityKey = 'section_B/B5_City';


    const title = props[titleKey];
    const subtitle = (props[titleKey]===props[title2Key]) ? '' : props[title2Key];
    const city = props[cityKey]
    const country = props[countryKey]

    return (
      <div className='settlement-cards cards'>
        <TitleVerificationCard
          style={this.props.cardStyle}
          cardTitle={{title:title, subtitle:subtitle}}
          cardHeader={{title:city, subtitle:country}}/>
        <ProfileDataCard style={this.props.cardStyle} />
        <BoundaryDataCard style={this.props.cardStyle} />
        <FormLinksCard style={this.props.cardStyle} />
      </div>
    );
  }
}

SettlementCards.displayName = 'Layouts.SettlementCards';

SettlementCards.propTypes = {
  data: React.PropTypes.object,
  cardStyle: React.PropTypes.object
};
// SettlementCards.defaultProps = {};

export default SettlementCards;
