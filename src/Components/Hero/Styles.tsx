import { styled } from 'styled-components'

import Theme from 'Constants/Theme'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100dvh;
`

export const Title = styled.h1``

export const Buttons = styled.div``

export const Button = styled.a`
	text-decoration: none;

	background-color: ${Theme.primary};
	color: ${Theme.secondary};

	padding: 10px 20px;

	border-radius: 8px;
`
