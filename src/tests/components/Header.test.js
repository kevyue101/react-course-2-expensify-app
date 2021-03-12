import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let wrapper, startLogout;

test('should render Header correctly', () => {
    wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should log out when button is clicked', () => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').at(0).simulate('click');
    expect(startLogout).toHaveBeenCalled();
});