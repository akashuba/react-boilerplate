import React from 'react'
import { shallow } from 'enzyme'
import { Form } from './Form'

describe('Form React component test with Enzyme', () => {
	it('renders without crashing', () => {
		const wrapper =	shallow(<Form name="Alex" />)
		console.log(wrapper.debug());

		// expect(wrapper.text()).to.equal('Alex');
		expect(wrapper.contains(<button type="submit">submit</button>)).toEqual(true);
	})
})
