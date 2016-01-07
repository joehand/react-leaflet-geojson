'use strict';

import React from 'react';

import Colors from 'material-ui/lib/styles/colors';
import CircularProgress from 'material-ui/lib/circular-progress';

let LoadingComponent = (props) => (
  <div className="loading">
    <CircularProgress mode="indeterminate" color={Colors.indigo500} size={2} />
  </div>
);

LoadingComponent.displayName = 'Cards.Settlement.LoadingComponent';

LoadingComponent.propTypes = {
  color: React.PropTypes.string,
};
LoadingComponent.defaultProps = {
  color: 'indigo500'
};

export default LoadingComponent;
