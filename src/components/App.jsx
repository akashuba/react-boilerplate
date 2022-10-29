import React, { useState } from 'react';
import styled from 'styled-components';

import ImageDoggy from '../assets/doggy.gif';
import { useAppData } from './useAppData';
import { TimelineAnimation } from "./TimelineAnimation";

export const App = () => {
	const list = useAppData();
	const [show, setShow] = useState(false);

	const onButtonClick = () => {
		setShow(!show);
	};

	return (
		<Container>
			{/* <StyledH1>My React App!</StyledH1>
			<DoggyWrapper>
				<Doggy src={ImageDoggy} />
			</DoggyWrapper>
			<Button onClick={onButtonClick}>show list</Button>
			<ListContainer>
				<List>
					{list && show &&
						list.map((item, index) => {
							return <ListItem key={index}>{item.name}</ListItem>;
					})}
				</List>
			</ListContainer> */}
      <TimelineAnimation />
		</Container>
	);
};

const Container = styled.div`
	font-family:
		-apple-system,
		BlinkMacSystemFont,
		Segoe UI, Roboto,
		Oxygen, Ubuntu,
		Cantarell, Fira
		Sans, Droid Sans,
		Helvetica Neue,
		sans-serif;
`;

const ListContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const List = styled.ul`
	padding-left: 0;
`;

const StyledH1 = styled.h1`
	color: #27aedb;
	text-align: center;
`;

const DoggyWrapper = styled.div`
	text-align: center;
`;

const Doggy = styled.img`
	width: 360px;
`;
const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 85px;
	height: 30px;
	border: 1px solid black;
	border-radius: 5px;
	margin: 20px auto;
	cursor: pointer;
`;

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