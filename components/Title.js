import React from 'react'
import styled from 'styled-components'

const TitleTextUpper = styled.h1`
	font-family: vortice-concept, sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 8rem;
	color: black;
	margin: 0;
	line-height: 8rem;
	padding-top: 2rem;
	padding-left: 2rem;
`

const TitleTextLower = styled.h1`
	font-family: vortice-concept, sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 8rem;
	color: black;
	margin: 0;
	line-height: 8rem;
	padding-left: 2rem;
`

const Title = () => {
	return (
		<>
			<TitleTextUpper>Zach</TitleTextUpper>
			<TitleTextLower>Schickler</TitleTextLower>
		</>
	)
}

export default Title
