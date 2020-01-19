import React from 'react'
import { shallow, mount } from 'enzyme'
import { Form } from './Form'

describe('Enzyme', () => {
	it('Should render component', () => {
		const wrapper = mount(<Form name='Alex' />)

		// console.log(wrapper.debug());
		expect(wrapper.find('[data-testid="name_input"]')).toHaveLength(1)
		expect(wrapper.find('[type="checkbox"]')).toHaveLength(1)
		expect(wrapper.find('button')).toHaveLength(1)
	})

	it('Should change title', () => {
		const wrapper = mount(<Form name='Alex' />)

		wrapper.setProps({ title: '¯|_(ツ)_/¯' })
		expect(wrapper.props().title).toEqual('¯|_(ツ)_/¯')
	})

	it('Should change inputs values', () => {
		const wrapper = mount(<Form name='Alex' />)
		// console.log(wrapper.debug());

		const input_name = wrapper.find('[data-testid="name_input"]').at(0)
		const input_agreement = wrapper.find('[type="checkbox"]').at(0)

		input_name.instance().value = 'Jhon'
		input_name.simulate('change')
		input_agreement.instance().checked = true
		input_agreement.simulate('change')

		// console.log(input_agreement.instance())
		expect(wrapper.find('[data-testid="name_input"]').get(0).props.value).toEqual('Jhon')
		expect(wrapper.find('[type="checkbox"]').at(0).instance().checked).toEqual(true);
	})

	it('Should submit form', () => {
		const onSubmit = jest.fn();
		const wrapper = mount(<Form onSubmit={onSubmit} />)
	
		const submit_button = wrapper.find('[type="submit"]')
		submit_button.simulate('submit')
		
		expect(onSubmit).toHaveBeenCalled();
	})
})
