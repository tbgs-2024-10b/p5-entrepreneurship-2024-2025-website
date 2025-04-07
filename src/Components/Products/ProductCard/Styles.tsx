import { styled } from 'styled-components'

export const Container = styled.div<{ $inverted: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: ${props => (props.$inverted ? 'row-reverse' : 'row')};
	gap: 20px;

	width: 100%;
	height: 200px;

	@media screen and (max-width: 800px) {
		width: 100%;
		height: unset;

		flex-direction: column-reverse;
	}
`

export const Content = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	flex-direction: column;

	height: 100%;

	@media screen and (max-width: 800px) {
		width: 80%;
		height: unset;
	}
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

	border-radius: 10px;

	@media screen and (max-width: 800px) {
		width: 80%;
		height: unset;
	}
`
