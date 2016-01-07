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

let TitleDisplayCard = (props) => (
  <Card style={props.style} {...props}>
    <CardHeader {...props.cardHeader} />
  </Card>
);

TitleDisplayCard.displayName = 'Cards.Settlement.TitleDisplayCard';

TitleDisplayCard.propTypes = {
  initiallyExpanded: React.PropTypes.bool,
  style: React.PropTypes.object,
  cardHeader: React.PropTypes.object,
};
TitleDisplayCard.defaultProps = {
  initiallyExpanded: true,
  style: {}
};

export default TitleDisplayCard;
