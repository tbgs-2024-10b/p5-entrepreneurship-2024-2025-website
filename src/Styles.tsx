import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		font-family: "Roboto", sans-serif;

		scroll-margin-top: 50px;
		scroll-behavior: smooth;
	}
`

export default GlobalStyle
