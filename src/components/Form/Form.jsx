import React, { useState } from 'react'
import styled from 'styled-components'

export const Form = props => {
	const [name, setName] = useState(props.name || '')

	const onSubmitClick = event => {
		console.log(event);
		
		event.preventDefault()
		console.log('submit prevented')
	}

	const onNameChange = event => {
		const name = event.currentTarget.value
						.slice(0,20)
		setName(name)
	}

	return (
		<FormWrapper onSubmit={onSubmitClick} data-testid='form-wrapper'>
			<input 
				value={name}
				type='text'
				placeholder='name'
				// maxLength="20"
				onChange={onNameChange}
				data-testid='name_input'
			/>
			<button type='submit'>submit</button>
		</FormWrapper>
	)
}

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
`
