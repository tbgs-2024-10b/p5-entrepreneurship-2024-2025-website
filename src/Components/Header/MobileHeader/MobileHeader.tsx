import { FC, useCallback, useState } from 'react'

import { Burger, Container, Link, LinkItem, Links, Logo, Nav } from './Styles'

const MobileHeader: FC = () => {
	const [IsOpen, SetIsOpen] = useState(false)

	const ToggleNav = useCallback(() => {
		SetIsOpen(prev => !prev)
	}, [])

	return (
		<>
			<Container>
				<Link href='#hero'>
					<Logo>Sip & Bites</Logo>
				</Link>
				<Burger onClick={ToggleNav}>
					<span></span>
					<span></span>
					<span></span>
				</Burger>
			</Container>
			<Nav $isOpen={IsOpen}>
				<Links>
					{/* <LinkItem>
						<Link href='#aboutUs'>About Us</Link>
					</LinkItem> */}
					<LinkItem>
						<Link href='#products'>Products</Link>
					</LinkItem>
					{/* <LinkItem>
						<Link href='#contactUs'>Contact Us</Link>
					</LinkItem> */}
				</Links>
			</Nav>
		</>
	)
}

export default MobileHeader
