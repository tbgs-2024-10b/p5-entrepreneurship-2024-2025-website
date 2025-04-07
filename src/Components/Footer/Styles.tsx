import { styled } from 'styled-components'

import Theme from 'Constants/Theme'

export const Container = styled.footer`
	width: 100%;
	height: 50px;
	padding: 10px 50px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-color: ${Theme.primary};
`

export const Text = styled.p`
	color: ${Theme.secondary};
`
