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

let TitleVerificationCard = (props) => (
  <Card initiallyExpanded={props.initiallyExpanded}
    style={props.style} {...props}>
    <CardTitle {...props.cardTitle}
      actAsExpander={true} />
    <CardHeader {...props.cardHeader}
      actAsExpander={true}
      style={{'paddingTop':0, 'height':'auto'}} />
    <List expandable={true}>
      <Divider />
      <ListItem
        primaryText='Profile Data'
        secondaryText='Not Verified & Incomplete'
        disabled={true}
        leftAvatar={
          <Avatar
            icon={<FontIcon className="material-icons">report_problem</FontIcon>}
            color={Colors.white}
            backgroundColor={Colors.amber500}
          />
        }
        initiallyOpen={false}
        nestedItems={[
          <ListItem
            primaryText="Profile & Boundary Match"
            leftAvatar={
              <Avatar
                icon={<FontIcon className="material-icons">check</FontIcon>}
                color={Colors.white}
                backgroundColor={Colors.green600}
              />
            }
          />,
          <ListItem
            primaryText="Community Verification"
            leftAvatar={
              <Avatar
                icon={<FontIcon className="material-icons">close</FontIcon>}
                color={Colors.white}
                backgroundColor={Colors.red500}
              />
            }
          />,
          <ListItem
            primaryText="Form Incomplete"
            leftAvatar={
              <Avatar
                icon={<FontIcon className="material-icons">close</FontIcon>}
                color={Colors.white}
                backgroundColor={Colors.red500}
              />
            }
          />,
        ]}
      >
      </ListItem>
      <ListItem
        primaryText='Boundary Data'
        secondaryText='Data Available & Verified'
        disabled={true}
        leftAvatar={
          <Avatar
            icon={<FontIcon className="material-icons">check</FontIcon>}
            color={Colors.white}
            backgroundColor={Colors.green600}
          />
        }
      >
      </ListItem>
      <ListItem
        disabled={true}
        leftAvatar={
          <Avatar
            icon={<FontIcon className="material-icons">close</FontIcon>}
            color={Colors.white}
            backgroundColor={Colors.red600}
          />
        }
        primaryText='Services Data'
        secondaryText='No Data Available'
      >
      </ListItem>
    </List>
  </Card>
);

TitleVerificationCard.displayName = 'Cards.Settlement.TitleVerificationCard';

TitleVerificationCard.propTypes = {
  initiallyExpanded: React.PropTypes.bool,
  style: React.PropTypes.object,
  cardTitle: React.PropTypes.object,
  cardHeader: React.PropTypes.object
};
TitleVerificationCard.defaultProps = {
  initiallyExpanded: true,
  style: {}
};

export default TitleVerificationCard;
