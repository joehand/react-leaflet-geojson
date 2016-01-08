'use strict';

import React from 'react';

import AllServicesCard from '../cards/settlement/AllServicesCard';
import BoundaryDataCard from '../cards/settlement/BoundaryDataCard';
import FormLinksCard from '../cards/settlement/FormLinksCard';
import ProfileDataCard from '../cards/settlement/ProfileDataCard';
import TitleVerificationCard from '../cards/settlement/TitleVerificationCard';
import ViewServicesCard from '../cards/settlement/ViewServicesCard';
import ServiceDataCard from '../cards/settlement/ServiceDataCard';


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

    // Service Keys
    const serviceTypeKey = 'section_C/C1_Service_Type';
    const serviceManagerKey = 'section_D/D2_Service_Manager';
    const serviceWorkingKey = 'section_D/D3_Service_Status';
    const otherKey = 'section_D/D4_Water_Quality';

    // DEMO!!!
    let demoSettlement = false;
    if (props._id === 4373407 || props._id === 1191715)  {
      demoSettlement = true;
    }
    console.log(this.props.data);

    return (
      <div className='settlement-cards cards'>
        { this.props.serviceData ?
          <ServiceDataCard
            cardTitle={{
              title:this.props.serviceData.properties[serviceTypeKey],
              subtitle:this.props.serviceData.properties[serviceManagerKey]
            }}
            cardHeader={{
              title:this.props.serviceData.properties[serviceWorkingKey],
              subtitle:this.props.serviceData.properties[otherKey]
            }}
            data={this.props.serviceData.properties}
            style={this.props.cardStyle}
          />
        : null
        }
        { (demoSettlement && this.props.showServices )  ?
          <AllServicesCard
            data={this.props.allServiceData}
            style={this.props.cardStyle} />
        :
          <ViewServicesCard style={this.props.cardStyle} />
        }
        <TitleVerificationCard
          style={this.props.cardStyle}
          cardTitle={{title:title, subtitle:subtitle}}
          cardHeader={{title:city, subtitle:country}}/>
        { demoSettlement ?
          <div>
            <ProfileDataCard style={this.props.cardStyle} />
          </div>
        : null
        }
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
