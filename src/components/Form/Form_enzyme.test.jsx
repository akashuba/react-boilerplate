import React from 'react'
import { shallow, mount } from 'enzyme'
import { Form } from './Form'
import { act } from "react-dom/test-utils";

jest.mock('../../api/submiForm')
import { submiForm } from "../../api/submiForm";

submiForm.mockImplementation( async (url) => {
	// console.log('200')
	return {
		status: 200
	}
});

describe('Enzyme', () => {
	it('Should render component', () => {
		const wrapper = mount(<Form name='Alex' />)

		// console.log(wrapper.debug());
		expect(wrapper.find('[data-testid="name_input"]')).toHaveLength(1)
		expect(wrapper.find('[type="checkbox"]')).toHaveLength(1)
		expect(wrapper.find('[type="submit"]')).toHaveLength(1)
	})

	it('Should change title', () => {
		const wrapper = mount(<Form name='Alex' />)

			// console.log(wrapper.debug());
		wrapper.setProps({ title: '¯|_(ツ)_/¯' })
		expect(wrapper.props().title).toEqual('¯|_(ツ)_/¯')
	})

	it('Should change inputs values', () => {
		const wrapper = mount(<Form name='Alex' />)

		const input_name = wrapper.find('[data-testid="name_input"]').at(0)
		const input_agreement = wrapper.find('[type="checkbox"]').at(0)

		input_name.instance().value = 'Irvim John Kenneth Loud Eugine'
		input_name.simulate('change')
		input_agreement.instance().checked = true
		input_agreement.simulate('change')

		// console.log(input_agreement.instance())
		expect(wrapper.find('[data-testid="name_input"]').get(0).props.value).toHaveLength(20)
		expect(wrapper.find('[data-testid="name_input"]').get(0).props.value).toEqual('Irvim John Kenneth L')
		expect(wrapper.find('[type="checkbox"]').at(0).instance().checked).toEqual(true);
	})

	// it('Should submit form', () => {
	// 	const onSubmit = jest.fn()
	// 	const wrapper = mount(<Form onSubmit={onSubmit} />)
	
	// 	const submit_button = wrapper.find('[type="submit"]')
	// 	submit_button.simulate('submit')
	// 	wrapper.update();

	// 	const wrapperUpdated = wrapper.find('[data-testid="form-wrapper"]').at(0)
	// 	console.log(wrapperUpdated.debug());
		
	// 	expect(onSubmit).toHaveBeenCalled();
	// 	expect(submiForm).toHaveBeenCalledTimes(1);
	// })

	it('Should change button text', () => {
		const wrapper = mount(<Form name='Alex' />)
		const button_test = wrapper.find('[type="button"]').at(0)

		button_test.simulate('click')
		wrapper.update();

		const button_test1 = wrapper.find('[type="button"]').at(0)

		expect(button_test1.text()).toEqual('testButtonWasClicked')
	})
})
