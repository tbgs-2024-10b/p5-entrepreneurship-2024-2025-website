import { styled } from 'styled-components'

import Theme from 'Constants/Theme'

export const Image = styled.img`
	height: 50dvh;
	aspect-ratio: 4/5;

	transition: opacity 0.2s ease-in-out;

	border-radius: 8px;

	&.faded {
		opacity: 0;
	}

	&.visible {
		opacity: 1;
	}
`

export const ImagePlaceholder = styled.div`
	height: 50dvh;
	aspect-ratio: 4/5;

	display: flex;
	justify-content: center;
	align-items: center;

	border: 2px dashed ${Theme.primary};
	border-radius: 8px;
`

export const Info = styled.p``

export const Button = styled.button`
	background-color: ${Theme.primary};
	color: ${Theme.secondary};

	padding: 10px 20px;

	border: none;
	border-radius: 8px;

	cursor: pointer;

	font-size: 16px;

	transition:
		background-color 0.3s ease-in-out,
		scale 0.3s ease-in-out;

	&:hover {
		background-color: ${Theme.highlight};
		scale: 1.1;
	}
`

export const PreviousImages = styled.div`
	width: 40%;

	display: flex;
	flex-direction: row;
	gap: 10px;

	@media screen and (max-width: 1000px) {
		width: 70%;
	}

	@media screen and (max-width: 600px) {
		width: 90%;
	}
`

export const PreviousImage = styled.img`
	width: 30%;
	aspect-ratio: 4/5;
`
