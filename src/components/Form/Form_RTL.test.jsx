import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Form, formTitle } from './index';

describe('react-testing-library', () => {
	test('Should render components', () => {
		const { getByTestId, getByText, getByLabelText } = render(<Form />);

		// console.log(getByTestId('name_input'));
		expect(getByTestId('name_input')).toBeInTheDocument();
		expect(getByText('submit')).toBeInTheDocument();
		expect(getByLabelText('agree')).toBeInTheDocument();
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

	test('Should submit form', () => {
		const onSubmit = jest.fn();
		const { getByText } = render(<Form onSubmit={onSubmit} />);
		const submit_button = getByText('submit');

		fireEvent.click(submit_button);

		expect(onSubmit).toHaveBeenCalledTimes(1);
	});
});
