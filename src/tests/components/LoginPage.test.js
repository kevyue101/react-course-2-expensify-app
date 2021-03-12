import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let wrapper, startLogin;

test('test rendering of the login page', () => {
    wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should log in when button is clicked', () => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').at(0).simulate('click');
    expect(startLogin).toHaveBeenCalled();
});