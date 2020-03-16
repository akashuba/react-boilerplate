import React, { useState } from 'react'
import styled from 'styled-components'

import { submiForm } from '../../api/submiForm'

export const Form = props => {
	const [name, setName] = useState(props.name || '')
	const [submitted, setSubmitted] = useState('')
	const [testButton, setTestButton] = useState('button')

	const onSubmitClick = event => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)

		submiForm('/submit', formData).then(response => {

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
	};

	const onTestButtonClick = () => {
		setTestButton('testButtonWasClicked')
	};

	return (
		<Container>
			<Title>{props.title}</Title>
			<FormWrapper onSubmit={onSubmitClick} data-testid='form-wrapper'>
				<NameField
					value={name}
					type='text'
					placeholder='name'
					name='name'
					onChange={onNameChange}
					data-testid='name_input'
				/>
				<CheckboxLabel>
					<input type='checkbox' name='agreement' />
					agree
				</CheckboxLabel>
				<StyledButton type='submit'>submit</StyledButton>
				{/* {console.log(<button type='submit'>submit</button>)} */}
				<div data-testid='submit_status'>
					{ submitted === 'success' ? 'Form was submitted' : 'Try again'}
				</div>
			</FormWrapper>
			<StyledButton
				id='testButton'
				type='button'
				onClick={onTestButtonClick}
			>
				{testButton}
			</StyledButton>
		</Container>
	)
}

const Container = styled.div`
	margin-left: 20px
`

const Title = styled.h1`
	font-weight: 500;
`

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
	font-size: 14px;
	margin-bottom: 20px;
	& > * {
		margin-bottom: 10px;
	}
`

const CheckboxLabel = styled.label`
	display: flex;
	align-items: center;
	font-size: 14px;
`

const NameField = styled.input`
	padding: 5px;
	font-size: 14px;
`

const StyledButton = styled.button`
	height: 25px;
	font-size: 14px;
`

