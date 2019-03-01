import React from 'react';
import { GamePage } from '../pages/Game/GamePage';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import { expect } from 'chai';
//import {DirtAndMole} from "../components/DirtAndMole";
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });


describe("Test GamePage component", () => {
    it('moles are populated just fine', () => {
        shallow(<GamePage />);
        //expect(homePage.find(DirtAndMole)).to.have.length(6);
    });
});
