import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Form } from './Form'

describe('react-testing-library', () => {
	test('Should render component', () => {
		const { getByTestId, queryByText, rerender, debug } = render(<Form />)

		expect(getByTestId('name_input')).toBeInTheDocument()
		expect(queryByText('submit')).toBeInTheDocument()
	})

	test('Input resive name prop', () => {
		const { getByTestId } = render(<Form name='Jimmy' />)
		const input_name = getByTestId('name_input')

		expect(input_name).toHaveValue('Jimmy')
	})

	test('Should change title prop and input value', async () => {
		const onSubmit = jest.fn();
		const { getByTestId, getByText, queryByText, rerender, debug } = render(<Form onSubmit={onSubmit}/>)
		const input_name = getByTestId('name_input')
		const submit_button = getByText('submit')

		fireEvent.input(input_name, {target: {value: 'Irvim John Kenneth Loud Eugine'}})
		const input_after_change = await waitForElement(() => getByTestId('name_input'))
		fireEvent.click(submit_button)

		// console.log(debug());
		// console.log(input_after_change);
		expect(onSubmit).toHaveBeenCalledTimes(1);
		expect(input_after_change.value.length).toEqual(20)
		expect(input_after_change).toHaveValue('Irvim John Kenneth L')

		const titleText = '¯|_(ツ)_/¯'
		rerender(<Form  title={titleText} />)
		expect(queryByText(titleText).textContent).toBe(titleText)
	})
})
