import { styled } from 'styled-components'

import Theme from 'Constants/Theme'

export const Image = styled.img`
	height: 50dvh;
`

export const ImagePlaceholder = styled.div`
	height: 50dvh;
	aspect-ratio: 4/5;

	display: flex;
	justify-content: center;
	align-items: center;

	border: 2px dashed ${Theme.primary};
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
`
