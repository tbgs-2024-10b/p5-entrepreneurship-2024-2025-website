import { styled } from 'styled-components'

import Theme from 'Constants/Theme'

export const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: calc(100dvh - 50px);

	margin-top: 50px;
`

export const InnerContainer = styled.div`
	height: 70%;
	width: 90%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 20px;

	@media screen and (max-width: 600px) {
		width: 100%;
		height: 100%;
		flex-direction: column-reverse;
		justify-content: space-evenly;
	}
`

export const Content = styled.div`
	width: 90%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 20px;
`

export const Texts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 10px;
`

export const Title = styled.h1``

export const Subtitle = styled.h2`
	font-size: 16px;
	font-weight: normal;
`

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

	transition: background-color 0.3s ease-in-out;

	&:hover {
		background-color: ${Theme.highlight};
	}
`

export const Image = styled.img`
	width: 50%;

	@media screen and (max-width: 1000px) {
		width: 60%;
	}

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`
