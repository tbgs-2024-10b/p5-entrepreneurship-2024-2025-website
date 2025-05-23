import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		
		font-family: 'Quicksand', sans-serif;

		scroll-behavior: smooth;
	}
`

export default GlobalStyle
