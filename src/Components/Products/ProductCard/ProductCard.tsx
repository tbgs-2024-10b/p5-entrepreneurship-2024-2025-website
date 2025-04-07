import { FC } from 'react'

import { Container, Content, Description, Image, Name } from './Styles'

interface Props {
	name: string
	description: string
	imageSrc: string
	inverted: boolean
}

const ProductCard: FC<Props> = props => {
	return (
		<Container $inverted={props.inverted}>
			<Content>
				<Name>{props.name}</Name>
				<Description>{props.description}</Description>
			</Content>
			<Image src={props.imageSrc} alt={`${props.name}' Image`} />
		</Container>
	)
}

export default ProductCard
