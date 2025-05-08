import { styled } from 'styled-components'

export const Content = styled.div`
	width: 80%;

	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: row;
	gap: 20px;
	flex-wrap: wrap;

	@media screen and (max-width: 1000px) {
		width: 90%;
		gap: 40px;
	}
`
