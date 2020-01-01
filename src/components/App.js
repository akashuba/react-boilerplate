import React from 'react'
import styled from 'styled-components'
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { longListFetch } from '../api/longList'

import ImageDoggy from '../assets/doggy.gif'

export const counterState = observable({
	counter: 0,

	increment() {
		this.counter++;
	},
	decrement() {
		this.counter--;
	}
})

@observer
class CounterView extends React.Component  {
	render() {
		console.log(this.props.store.counter);
		
		const {store} = this.props;
		return (
			<div>
				<div>Counter value: {store.counter}</div>
				<button onClick={() => {store.increment()}}>+1</button>
				<button onClick={() => {store.decrement()}}>-1</button>
			</div>
		)
	}
}

export class App extends React.Component {
	componentDidMount() {
		longListFetch().then(async response => {
			if (response.status === 200) {
				console.log(await response.json())
			} else {
				console.log('Error: ', response.status)
			}
		})
	}

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
				<CounterView store={counterState}/>
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
