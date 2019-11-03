import React from 'react'
import styled from 'styled-components'
import  ImageDoggy  from '../assets/doggy.gif'

export const App = () => {
  console.log(ImageDoggy);
  
	return (
		<div>
			<StyledH1>My React App!</StyledH1>
      <DoggyWrapper>
		  	<Doggy src={ImageDoggy} />
      </DoggyWrapper>
		</div>
	)
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
