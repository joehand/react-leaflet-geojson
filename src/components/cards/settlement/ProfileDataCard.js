'use strict';

import React from 'react';

import Colors from 'material-ui/lib/styles/colors';
import FontIcon from 'material-ui/lib/font-icon';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

let ProfileDataCard = (props) => (
  <Card initiallyExpanded={props.initiallyExpanded}
    style={props.style}>
    <CardHeader {...props.cardHeader}
      avatar={
        <Avatar
          icon={<FontIcon className="material-icons">{props.icon}</FontIcon>}
          color={Colors.white}
          backgroundColor={Colors.lightBlue900}
        />}
      showExpandableButton={props.showExpandableButton}
      actAsExpander={true} />
    <CardText expandable={true}>
      This box will show the sections of the profile form missing data.
      It can also display some other information about the settlement.
    </CardText>
  </Card>
);

ProfileDataCard.displayName = 'Cards.Settlement.ProfileDataCard';

ProfileDataCard.propTypes = {
  initiallyExpanded: React.PropTypes.bool,
  showExpandableButton: React.PropTypes.bool,
  style: React.PropTypes.object,
  icon: React.PropTypes.string.isRequired,
  cardHeader: React.PropTypes.shape({
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string
  }).isRequired
};
ProfileDataCard.defaultProps = {
  initiallyExpanded: false,
  showExpandableButton: true,
  style: {},
  icon: 'assignment',
  cardHeader: {
    title: 'Settlement Profile',
    subtitle: 'Basic Information'
  }
};

export default ProfileDataCard;
