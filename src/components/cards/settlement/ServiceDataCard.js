'use strict';

import React from 'react';

import State from '../../../state/AppState';

import Colors from 'material-ui/lib/styles/colors';
import FontIcon from 'material-ui/lib/font-icon';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

let ServiceDataCard = (props) => (
  <Card initiallyExpanded={props.initiallyExpanded}
    style={props.style}>
    <CardTitle {...props.cardTitle} />
    { (props.cardHeader.title === 'working') ?
      <CardHeader {...props.cardHeader}
        avatar={
          <Avatar
            icon={<FontIcon className="material-icons">{props.icon}</FontIcon>}
            color={Colors.white}
            backgroundColor={Colors.green500}
          />} />
      :
      <CardHeader {...props.cardHeader}
        avatar={
          <Avatar
            icon={<FontIcon className="material-icons">build</FontIcon>}
            color={Colors.white}
            backgroundColor={Colors.red500}
          />} />
    }
  </Card>
);

ServiceDataCard.displayName = 'Cards.Settlement.ServiceDataCard';

ServiceDataCard.propTypes = {
  initiallyExpanded: React.PropTypes.bool,
  showExpandableButton: React.PropTypes.bool,
  style: React.PropTypes.object,
  icon: React.PropTypes.string.isRequired,
  cardHeader: React.PropTypes.shape({
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string
  }).isRequired
};
ServiceDataCard.defaultProps = {
  initiallyExpanded: true,
  showExpandableButton: false,
  style: {},
  icon: 'place',
  cardHeader: {
    title: 'Service Point'
  }
};

export default ServiceDataCard;
