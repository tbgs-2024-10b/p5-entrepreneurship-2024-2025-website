import { styled } from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 20px;

	width: 100%;
	height: 200px;
`

export const Content = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	flex-direction: column;

	height: 100%;
`

export const Name = styled.h3`
	text-align: left;
`

export const Description = styled.p`
	text-align: left;
`

export const Image = styled.img`
	aspect-ratio: 1 / 1;
	height: 100%;
`
