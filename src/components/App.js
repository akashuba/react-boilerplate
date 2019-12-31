import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { fetchListAction } from '../redux/actions/fetchListAction'

import ImageDoggy from '../assets/doggy.gif'

export class ViewdApp extends React.Component {
	componentDidMount() {
		this.props.longListFetchDispatch()
	}

	onButtonClick = () => {
		console.log('button was clicked')
	}

	render() {
		const list = this.props && this.props.list
		console.log('list ', list)

		return (
			<div>
				<StyledH1>My React App!</StyledH1>
				<DoggyWrapper>
					<Doggy src={ImageDoggy} />
				</DoggyWrapper>
				<Button onClick={this.onButtonClick}>Button</Button>
				<ul>
					{list &&
						list.map((item, index) => {
							return <ListItem key={index}>{item.name}</ListItem>
						})}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		list: state.list,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		longListFetchDispatch: () => {
			dispatch(fetchListAction())
		},
	}
}

export const App = connect(mapStateToProps, mapDispatchToProps)(ViewdApp)

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
	margin-left: 40px;
	cursor: pointer;
`

const ListItem = styled.i`
	display: block;
	border: 1px solid #ece5e5;
	padding: 5px;
	width: 200px;
	font-style: normal;

	&:hover {
		background-color: #f4f4f4;
	}
`
