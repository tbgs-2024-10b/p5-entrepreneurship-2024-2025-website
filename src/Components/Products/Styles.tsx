import { styled } from 'styled-components'

export const Content = styled.div`
	width: 70%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;

	@media screen and (max-width: 1000px) {
		width: 90%;
		gap: 40px;
	}
`
