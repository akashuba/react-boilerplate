import React from 'react';
import { render, fireEvent, waitForElement, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Form, formTitle } from './index';

jest.mock('../../api/submiForm')
import { submiForm } from "../../api/submiForm";

submiForm.mockImplementation( async (url) => {
	// console.log('200')
	return {
		status: 200
	}
});

describe('react-testing-library', () => {
	test('Should render components', () => {
		const { getByTestId, getByText, getByLabelText } = render(<Form />);

		// console.log(getByTestId('name_input'));
		expect(getByTestId('name_input')).toBeInTheDocument();
		expect(getByText('submit')).toBeInTheDocument();
		expect(getByLabelText('agree')).toBeInTheDocument();
		expect(getByText('button')).toBeInTheDocument();
	});

	test('Should change title', () => {
		const { getByText, rerender } = render(<Form title={formTitle} />);
		expect(getByText(formTitle)).toBeInTheDocument();

		const titleText = '¯|_(ツ)_/¯';
		rerender(<Form title={titleText} />);
		expect(getByText(titleText).textContent).toBe(titleText);
	});

	test('Should change inputs values', async () => {
		const { getByTestId, getByText, getByLabelText, debug } = render(<Form />);
		expect(getByLabelText('agree').checked).toEqual(false);

		fireEvent.input(getByTestId('name_input'),
			{ target: { value: 'Irvim John Kenneth Loud Eugine' } }
		);
		fireEvent.click(getByLabelText('agree'));

		const input_name = await waitForElement(() => getByTestId('name_input'));
		const input_checkbox = await waitForElement(() => getByLabelText('agree'));

		// console.log(debug());
		// console.log(input_checkbox);
		expect(input_name.value.length).toEqual(20);
		expect(input_name).toHaveValue('Irvim John Kenneth L');
		expect(input_checkbox.checked).toEqual(true);
	});

	test('Should submit form', async () => {
		const onSubmit = jest.fn();
		const { getByText, findByText, debug } = render(<Form onSubmit={onSubmit} />);
		// const submit_button = getByText('submit');
		const submit_button = await waitForElement(() => findByText('submit'))
		
		fireEvent.click(submit_button);

		const submitMessage = await waitForElement(() => findByText('Form was submitted'))
		// console.log(debug())

		expect(onSubmit).toHaveBeenCalledTimes(1);
		expect(submiForm).toHaveBeenCalledTimes(1);
		expect(submitMessage).toBeInTheDocument()
	});

	test('Should change button text', async () => {
		const { getByText, debug, queryByText } = render(<Form />);

		fireEvent.click(getByText('button'));
		const test_button = await waitForElement(() => queryByText('testButtonWasClicked'))
		// console.log(debug())

		expect(test_button).toHaveTextContent('testButtonWasClicked')
	});
});
