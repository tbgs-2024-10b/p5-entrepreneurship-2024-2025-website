import { FC } from 'react'

import { Container, Link, LinkItem, Links, Logo } from './Styles'

const DesktopHeader: FC = () => {
	return (
		<Container>
			<Link href='#hero'>
				<Logo>P5</Logo>
			</Link>
			<Links>
				<LinkItem>
					<Link href='#aboutUs'>About Us</Link>
				</LinkItem>
				<LinkItem>
					<Link href='#products'>Products</Link>
				</LinkItem>
				<LinkItem>
					<Link href='#contactUs'>Contact Us</Link>
				</LinkItem>
			</Links>
		</Container>
	)
}

export default DesktopHeader
