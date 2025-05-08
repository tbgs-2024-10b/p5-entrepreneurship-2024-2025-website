import { styled } from 'styled-components'

import Theme from 'Constants/Theme'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;

	width: 30%;

	padding-bottom: 20px;

	border: 2px solid ${Theme.primary};

	border-radius: 12px;

	@media screen and (max-width: 800px) {
		width: 40%;
	}

	@media screen and (max-width: 600px) {
		width: 90%;
	}
`

export const Content = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;

	height: 100%;

	@media screen and (max-width: 800px) {
		width: 80%;
		height: unset;
	}
`

export const Name = styled.h3`
	text-align: center;
`

export const Image = styled.img`
	width: 100%;

	border-radius: 10px 10px 0 0;
`
