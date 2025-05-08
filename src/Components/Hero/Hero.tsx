import { FC } from 'react'

import {
	Button,
	Buttons,
	Container,
	Content,
	Image,
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
				<Image
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1200px-Aspect-ratio-16x9.svg.png'
					alt='Hero Image'
				/>
			</InnerContainer>
		</Container>
	)
}

export default Hero
