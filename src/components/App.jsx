import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { longListFetch } from '../api/longList';

import ImageDoggy from '../assets/doggy.gif';

export const App = () => {
	useEffect(() => {
		longListFetch().then(async response => {
			if (response.status === 200) {
				console.log(await response.json());
			} else {
				console.log('Error: ', response.status);
			}
		});
	});

	const onButtonClick = () => {
		console.log('button was clicked');
	};

	return (
		<div>
			<StyledH1>My React App!</StyledH1>
			<DoggyWrapper>
				<Doggy src={ImageDoggy} />
			</DoggyWrapper>
			<Button onClick={onButtonClick}>Button</Button>
		</div>
	);
};

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
	width: 60px;
	height: 30px;
	border: 1px solid black;
	border-radius: 5px;
	cursor: pointer;
`;
