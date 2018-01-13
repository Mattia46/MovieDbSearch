import React from 'react';
import { mount, shallow, render } from 'enzyme';
import MovieButton from './Button';

describe('Button Component', () => {
    const movie = {
        link: 'Top Movie',
        type: 'Top Movie Type'
    };

    const wrapper = shallow(<MovieButton onClick='method' movie={movie}/>);

	it('should render a button with Top Movie', () => {
        expect(wrapper.contains('Top Movie Type')).toBe(true);
	});

    it('should has a name', () => {
        expect(wrapper.name()).toEqual('button');
    });

    it('should has props', () => {
        expect(wrapper.props().children).toEqual('Top Movie Type');
    });


});

