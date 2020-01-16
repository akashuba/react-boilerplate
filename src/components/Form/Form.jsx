import React, { useState } from 'react'
import styled from 'styled-components'

export const Form = props => {
	const [name, setName] = useState(props.name || '')

	const onSubmitClick = event => {
		event.preventDefault()
		props.onSubmit && props.onSubmit();
	}

	const onNameChange = event => {
		const name = event.currentTarget.value.slice(0,20)
		setName(name)
	}

	return (
		<>
			<h1>{props.title}</h1>
			<FormWrapper onSubmit={onSubmitClick} data-testid='form-wrapper'>
				<input 
					value={name}
					type='text'
					placeholder='name'
					name="name"
					onChange={onNameChange}
					data-testid='name_input'
				/>
				<CheckboxLabel>
					<input type='checkbox' name='checkbox'/>
					agree
				</CheckboxLabel>
				<button type='submit'>submit</button>
				{/* {console.log(<button type='submit'>submit</button>)} */}
			</FormWrapper>
		</>
	)
}

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
	margin-left: 10px;
	& > * {
		margin-bottom: 10px;
	}
`

const CheckboxLabel = styled.label`
	display: flex;
	align-items: center;
`;
