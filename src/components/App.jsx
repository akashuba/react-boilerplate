import React from 'react'
import styled from 'styled-components'

import { Form, formTitle } from './Form'

export class App extends React.Component {

	render() {
		return (
			<div>
				<Form title={formTitle} />
			</div>
		)
	}
}
