import React from 'react'
import { shallow, mount } from 'enzyme'
import { Form } from './Form'

describe('Form React component test with Enzyme', () => {
	it('renders without crashing', () => {
		const wrapper =	shallow(<Form name="Alex" />)
		// console.log(wrapper.debug());

		expect((wrapper).find('[data-testid="name_input"]').length).toEqual(1)
		expect(wrapper.contains(<button type="submit">submit</button>)).toEqual(true);
	})
})
