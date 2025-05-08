import { FC } from 'react'

import {
	Button,
	Buttons,
	Container,
	Content,
	Image,
	InnerContainer,
	Subtitle,
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
						<Subtitle>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Nobis, sunt consequuntur. Pariatur incidunt
							nostrum blanditiis culpa distinctio maxime quam
							magni.
						</Subtitle>
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
