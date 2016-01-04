/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import Main from 'components/Main';

describe('MainComponent', () => {
    let MainComponent;
    let State;

    beforeEach(() => {
      MainComponent = createComponent(Main);
      State = require('state/State')
    });

    it('should have show loading for loading status', () => {
      // State.set({status:'loading'})
      // console.log(MainComponent)
      expect(MainComponent.props.className).to.equal('fail');
    });

    it('should have its component name as default className', () => {
      expect(MainComponent.props.className).to.equal('index');
    });
});
