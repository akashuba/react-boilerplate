import React from 'react'
import styled from 'styled-components'
import { configure } from 'mobx';
import { observer } from 'mobx-react';

import { appStore } from '../mobX/store'

import ImageDoggy from '../assets/doggy.gif'

configure({ enforceActions: 'observed' });

@observer
class CounterView extends React.Component  {
	render() {
		
		const {store} = this.props;
		return (
			<div>
				<div>Counter value: {store.counter}</div>
				<button onClick={() => {store.increment()}}>+1</button>
				<button onClick={() => {store.decrement()}}>-1</button>
				<button onClick={() => {store.getApiData()}}>fetch API</button>
				<h3>Fetched Data</h3>
				<div>{store.listOfData }</div>
			</div>
		)
	}
}

export class App extends React.Component {

	onButtonClick = () => {
		console.log('button was clicked')
	}

	render() {
		
		return (
			<div>
				<StyledH1>My React App!</StyledH1>
				<DoggyWrapper>
					<Doggy src={ImageDoggy} />
				</DoggyWrapper>
				<Button onClick={this.onButtonClick}>Button</Button>
				<CounterView store={appStore}/>
			</div>
		)
	}
}

const StyledH1 = styled.h1`
	color: #27aedb;
	text-align: center;
`

const DoggyWrapper = styled.div`
	text-align: center;
`

const Doggy = styled.img`
	width: 360px;
`
const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60px;
	height: 30px;
	border: 1px solid black;
	border-radius: 5px;
	cursor: pointer;
`
