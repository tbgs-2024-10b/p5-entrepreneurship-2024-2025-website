import { FC } from 'react'

import { Container, Link, LinkItem, Links, Logo } from './Styles'

const Header: FC = () => {
	return (
		<Container>
			<Logo>P5</Logo>
			<Links>
				<LinkItem>
					<Link>About Us</Link>
				</LinkItem>
				<LinkItem>
					<Link>Products</Link>
				</LinkItem>
				<LinkItem>
					<Link>Contact Us</Link>
				</LinkItem>
			</Links>
		</Container>
	)
}

export default Header
