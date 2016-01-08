'use strict';

import React from 'react';
import _ from 'lodash';

import State from '../../../state/AppState';

import Colors from 'material-ui/lib/styles/colors';
import FontIcon from 'material-ui/lib/font-icon';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardHeader from 'material-ui/lib/card/card-header';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

class AllServicesCard extends React.Component {

  render() {
    const props = this.props;
    const features = this.props.data;

    const _UNIQUEARRAY = _.countBy(features, function(feat) {
        return feat.properties['section_C/C1_Service_Type']
    });
    const serviceCategories = _.map(_UNIQUEARRAY, function(value, key) {
        return {name: key, count:value};
    });

    return (
       <Card initiallyExpanded={props.initiallyExpanded}
        style={props.style}>
        <CardHeader {...props.cardTitle} />
        <List>
          { serviceCategories.map(function(category){
              return (
                <ListItem
                  key={category.name}
                  style={{padding:'0px', margin:'-10px 0'}}
                  primaryText={category.name}
                  rightAvatar={
                    <Avatar
                      color={Colors.white}
                      backgroundColor={Colors.blue500}
                    >{category.count}</Avatar>
                  }
                />
              )
            })
          }
        </List>
      </Card>

    );
  }
}


AllServicesCard.displayName = 'Cards.Settlement.AllServicesCard';

AllServicesCard.propTypes = {
  initiallyExpanded: React.PropTypes.bool,
  showExpandableButton: React.PropTypes.bool,
  style: React.PropTypes.object,
  icon: React.PropTypes.string.isRequired,
  cardHeader: React.PropTypes.shape({
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string
  })
};
AllServicesCard.defaultProps = {
  initiallyExpanded: true,
  showExpandableButton: false,
  style: {},
  icon: 'place',
  cardTitle: {
    title: 'Service Data',
    subtitle: 'Count of Service Type'
  }
};

export default AllServicesCard;
