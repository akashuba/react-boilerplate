import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Form } from './Form'

describe('react-testing-library', () => {
	test('Form rendered', () => {
		const { getByTestId } = render(<Form />)
		const element = getByTestId('form-wrapper')

		expect(element).toBeInTheDocument()
	})
	test('Input resive name prop', () => {
		const { getByPlaceholderText } = render(<Form name='Jimmy' />)
		const input_name = getByPlaceholderText('name')

		expect(input_name).toHaveValue('Jimmy')
	})
	test('Input max length 20 symbols', async () => {
		const { getByPlaceholderText, debug } = render(<Form name='Irvin' />)
		const input_name = getByPlaceholderText('name')

		fireEvent.input(input_name, {target: {value: 'Irvim John Kenneth Loud Eugine'}})

		const input_after_change = await waitForElement(() => getByPlaceholderText('name') )

		expect(input_after_change).toHaveValue('Irvim John Kenneth L')
	})
})
