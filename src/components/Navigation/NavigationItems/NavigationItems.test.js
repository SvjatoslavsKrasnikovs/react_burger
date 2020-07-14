import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//Shallow renders comkponent withput rendering it deeply - as placeholders

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter});

describe('<NavigationItems/>', () => {
    //Before each test:
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('Should render 2 navigation item elements', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('We need 3 items when we are authenticated', () => {
        wrapper.setProps({ auth: true });
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('See if authenticete unlocks option to log out.', () => {
        wrapper.setProps({ auth: true });
        expect(wrapper.contains(<NavigationItem link="/logout">Log out</NavigationItem>)).toEqual(true);
    });

});