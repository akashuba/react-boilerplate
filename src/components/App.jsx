import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { Form, formTitle } from './Form'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif ;
  }
`

export class App extends React.Component {

	render() {
		return (
			<div>
				<GlobalStyle />
				<Form title={formTitle} />
			</div>
		)
	}
}
