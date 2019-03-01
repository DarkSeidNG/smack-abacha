import React from 'react';
import { HomePage } from '../pages/Home/HomePage';
import { configure } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import { PropTypes } from 'prop-types';
import {spy} from 'sinon';
import { expect as chaiExpect } from 'chai';
import configureStore from 'redux-mock-store'
import {SelectLevelItem} from "../components/SelectLevelItem";

const middlewares = [];
const mockStore = configureStore(middlewares);
configure({ adapter: new Adapter() });
let mockedStore = mockStore({});

describe("Test HomePage component", () => {
    it('check route, dispatch and store setup for component', () => {
        // test will not compile if component is not correctly setup
        const wrapper = mount(<MemoryRouter><HomePage dispatch={spy()}/></MemoryRouter>, {
            context: {store: mockedStore},
            childContextTypes: {store: PropTypes.object.isRequired}});
        const homePageChildren = wrapper.children();
        let levels = homePageChildren.find('.levels');
        chaiExpect(levels.find(SelectLevelItem)).to.have.length(5);
        expect(true).toBeTruthy();
    });
});
