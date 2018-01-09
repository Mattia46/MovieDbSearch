import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Main from './Main';

describe('Main Component', () => {
	const wrapper = shallow(<Main />);
    
	test('should has an input field', () => {
		expect(wrapper.contains(<input/>)).toBe(true);
	});
    
	test('should has a state with a movie array', () => {
		expect(wrapper.state().movie).toEqual([]);
	});
});