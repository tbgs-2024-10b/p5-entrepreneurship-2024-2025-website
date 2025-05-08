import { FC } from 'react'

import {
	Button,
	Buttons,
	Container,
	Content,
	InnerContainer,
	Texts,
	Title,
} from './Styles'

const Hero: FC = () => {
	return (
		<Container id='hero'>
			<InnerContainer>
				<Content>
					<Texts>
						<Title>Sip & Bites</Title>
					</Texts>
					<Buttons>
						<Button href='#products'>See Our Products</Button>
					</Buttons>
				</Content>
			</InnerContainer>
		</Container>
	)
}

export default Hero
