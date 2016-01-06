'use strict';

import React from 'react';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import Divider from 'material-ui/lib/divider';

import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Avatar from 'material-ui/lib/avatar';

require('styles/layouts/Settlement.scss');


class SettlementComponent extends React.Component {
  render() {
    console.log(this.props);
    const titleKey = 'section_B/B7_Settlement_Name_Community';
    const countryKey = 'section_B/B3_Country';
    const cityKey = 'section_B/B5_City';
    const cardStyle = {
      margin: '10px 0 15px 0'
    };

    const GeoCard = () => (
      <Card initiallyExpanded={true} style={cardStyle}>
        <CardTitle
          title={this.props[cityKey]}
          subtitle={this.props[countryKey]} />
      </Card>
    );

    const VerificationCard = () => (
      <Card initiallyExpanded={false} style={cardStyle}>
        <CardHeader
          title='Data Verification Status'
          subtitle='Unverified'
          avatar={<Avatar style={{color: 'red'}}>B</Avatar>}
          actAsExpander={true}
          showExpandableButton={true} />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions expandable={true}>
          <FlatButton label="Action1"/>
          <FlatButton label="Action2"/>
        </CardActions>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );



    return (
      <div className='settlement-data'>
        <GeoCard />
        <VerificationCard />
        <VerificationCard />
        <VerificationCard />
      </div>
    );
  }
}

SettlementComponent.displayName = 'LayoutsSettlementComponent';

// Uncomment properties you need
// SettlementComponent.propTypes = {};
// SettlementComponent.defaultProps = {};

export default SettlementComponent;
