'use strict';

import React from 'react';

import State from '../../../state/AppState';

import Colors from 'material-ui/lib/styles/colors';
import FontIcon from 'material-ui/lib/font-icon';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

let ViewServicesCard = (props) => (
  <Card initiallyExpanded={props.initiallyExpanded}
    style={props.style}>
    <CardActions>
      <RaisedButton
        onTouchTap={function(){State.trigger('app:loadSettlementServices')}}
        primary={true}
        style={{margin:'10px 20px', 'display' : 'block'}}
        backgroundColor={Colors.red900}
        label="View Demo for Old Fadama Services"
        labelPosition="after">
      </RaisedButton>
    </CardActions>
  </Card>
);

ViewServicesCard.displayName = 'Cards.Settlement.ViewServicesCard';

ViewServicesCard.propTypes = {
  style: React.PropTypes.object,
  icon: React.PropTypes.string.isRequired,
  cardHeader: React.PropTypes.shape({
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string
  }).isRequired
};
ViewServicesCard.defaultProps = {
  style: {},
  icon: 'assignment',
  cardHeader: {
    title: 'View Services',
    subtitle: 'Load Service Data'
  }
};

export default ViewServicesCard;
