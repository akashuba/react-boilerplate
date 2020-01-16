import React from 'react';
import { shallow, mount } from 'enzyme';
import { Form } from './Form';

describe('Enzyme', () => {
	it('Should render component', () => {
		const wrapper = shallow(<Form name="Alex" />);

		// console.log(wrapper.find('[data-testid="name_input"]'));
		expect(wrapper.find('[data-testid="name_input"]')).toHaveLength(1);
		expect(wrapper.find('button')).toHaveLength(1);
	});

	it('Should change title prop and input value', () => {
		const wrapper = mount(<Form name="Alex" />);
		wrapper.setProps({ title: '¯|_(ツ)_/¯' });
		// console.log(wrapper.debug());

		let input = wrapper.find('[data-testid="name_input"]').at(0);
		input.instance().value = 'Jhon';
		input.simulate('change');

		input = wrapper.find('[data-testid="name_input"]').get(0);

		expect(input.props.value).toEqual('Jhon');
		expect(wrapper.props().title).toEqual('¯|_(ツ)_/¯');
	});
});
