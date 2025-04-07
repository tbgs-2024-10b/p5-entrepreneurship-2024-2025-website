import { styled } from 'styled-components'

import Theme from 'Constants/Theme'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: calc(100dvh - 50px);

	margin-top: 50px;
`

export const InnerContainer = styled.div`
	height: 60%;
	width: 90%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
`

export const Content = styled.div`
	width: 50%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 20px 0;
`

export const Title = styled.h1``

export const Buttons = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 20px;
`

export const Button = styled.a`
	text-decoration: none;

	background-color: ${Theme.primary};
	color: ${Theme.secondary};

	padding: 10px 20px;

	border-radius: 8px;

	cursor: pointer;
`

export const Image = styled.img`
	height: 100%;
`
