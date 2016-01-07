'use strict';

import React from 'react';

import Colors from 'material-ui/lib/styles/colors';
import FontIcon from 'material-ui/lib/font-icon';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';

let FormLinksCard = (props) => (
  <Card initiallyExpanded={props.initiallyExpanded}
    style={props.style}>
    <CardHeader {...props.cardHeader}
      avatar={
        <Avatar
          backgroundColor={Colors.deepOrange500}
        >
        </Avatar>
      }
      actAsExpander={true}
      showExpandableButton={true} />
    <List
      subheader={props.listSubheader}
      expandable={true}
    >
    {props.formLinks.map(function(item, i){
      return (
        <ListItem
          key={i}
          primaryText={
            <a href={item.url} target='_blank'>{item.text}</a>
          }
          leftIcon={<FontIcon className="material-icons">{item.icon}</FontIcon>}
        />
      )
    })}

    </List>
  </Card>
);

FormLinksCard.displayName = 'Cards.Settlement.FormLinksCard';

FormLinksCard.propTypes = {
  initiallyExpanded: React.PropTypes.bool,
  style: React.PropTypes.object,
  cardHeader: React.PropTypes.shape({
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string
  }).isRequired,
  listSubheader: React.PropTypes.string,
  formLinks: React.PropTypes.array.isRequired
};
FormLinksCard.defaultProps = {
  initiallyExpanded: false,
  style: {},
  cardHeader: {
    title: 'Edit Settlement Data',
    subtitle: 'Ona Platform'
  },
  listSubheader: 'Open Forms to Edit on Ona',
  formLinks: [
    {
        url: 'http://ona.io',
        text: 'Profile Form',
        icon: 'content_paste'
    },
    {
        url: 'http://ona.io',
        text: 'Boundary Form',
        icon: 'map'
    }
  ]
};

export default FormLinksCard;
