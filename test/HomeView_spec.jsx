import React from 'react';

import {
    renderIntoDocument,
    findRenderedDOMComponentWithTag,
    Simulate
} frmom 'react-addons-test-utils';

import { HomeView } from '../src/views/HomeView';
import {expect} from 'chai';

describe('HomeView', => {
    const HomeView = 'Rendered';
    const component = renderIntoDocument(
        <HomeView/>
    );
    const homeviewEle = findRenderedDOMComponentWithClass(component, 'home-main');

    expect(home-main).to.be.ok;
});

it('should render a div with the homeview component', () => {
    const homeview = 'Home';
    const component = renderIntoDocument(
        <HomeView
            homeview={homeview}
        />
    );
    const homeviewEle = findRenderedDOMComponentWithClass(component, 'home-main');
    const todoText = todoEle.textContent;

    expect(homeview).to.equal('homeview');
});

