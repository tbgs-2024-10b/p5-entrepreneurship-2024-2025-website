import { styled } from 'styled-components'

import Theme from 'Constants/Theme'

export const Container = styled.header`
	width: 100%;
	height: 50px;

	padding: 10px 50px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: ${Theme.primary};

	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	z-index: 200;
`

export const Logo = styled.div`
	height: 100%;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	color: ${Theme.secondary};

	font-weight: bold;
`

export const Links = styled.ul`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: column;
	gap: 20px;

	list-style-type: none;
`

export const LinkItem = styled.li`
	color: ${Theme.secondary};

	font-weight: bold;
`

export const Link = styled.a`
	text-decoration: none;
	color: ${Theme.secondary};
`

export const Burger = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 5px;

	cursor: pointer;

	& span {
		width: 20px;
		height: 3px;

		background-color: ${Theme.secondary};
	}
`

export const Nav = styled.nav<{ $isOpen: boolean }>`
	background-color: ${Theme.primary};

	position: fixed;
	top: 50px;
	left: 0;
	right: 0;

	z-index: 100;

	padding: 20px 50px;

	overflow: hidden;
	transition: all 0.2s linear;
	transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
`
