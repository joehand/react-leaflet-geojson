'use strict';

import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';

let TitleDisplayCard = (props) => (
  <Card style={props.style} {...props}>
    <CardHeader {...props.cardHeader} />
  </Card>
);

TitleDisplayCard.displayName = 'Cards.Settlement.TitleDisplayCard';

TitleDisplayCard.propTypes = {
  initiallyExpanded: React.PropTypes.bool,
  style: React.PropTypes.object,
  cardHeader: React.PropTypes.shape({
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string
  }).isRequired
};
TitleDisplayCard.defaultProps = {
  initiallyExpanded: true,
  style: {}
};

export default TitleDisplayCard;
