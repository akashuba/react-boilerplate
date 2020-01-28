import React, { useState } from 'react'
import styled from 'styled-components'

import { submiForm } from '../../api/submiForm'

export const Form = props => {
	const [name, setName] = useState(props.name || '')
	const [submitted, setSubmitted] = useState('')
	const [testButton, setTestButton] = useState('button')

	const onSubmitClick = event => {
		event.preventDefault()
		props.onSubmit && props.onSubmit()	
		submiForm('/submit').then(response => {

			if (response.status === 200) {
				setSubmitted('success')	
			} else {
				setSubmitted('fault')	
			}
		})	
	}

	const onNameChange = event => {
		const name = event.currentTarget.value.slice(0, 20)
		setName(name)
	}

	const onTestButtonClick = () => {
		setTestButton('testButtonWasClicked')
	}

	return (
		<>
			<h1>{props.title}</h1>
			<FormWrapper onSubmit={onSubmitClick} data-testid='form-wrapper'>
				<input
					value={name}
					type='text'
					placeholder='name'
					name='name'
					onChange={onNameChange}
					data-testid='name_input'
				/>
				<CheckboxLabel>
					<input type='checkbox' name='checkbox' />
					agree
				</CheckboxLabel>
				<button type='submit'>submit</button>
				{/* {console.log(<button type='submit'>submit</button>)} */}
				{ submitted === 'success' && <div>Form was submitted</div> }
				{ submitted === 'fault' && <div>Try again</div>  }
			</FormWrapper>
			<button id='testButton' type='button' onClick={onTestButtonClick}>{testButton}</button>
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
`

const NameField = styled.input`
	padding: 5px;
`

const StyledButton = styled.button`
	height: 25px;
	width: 100px;
`
