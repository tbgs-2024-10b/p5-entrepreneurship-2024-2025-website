import { FC } from 'react'

import { Container, Content, Image, Name } from './Styles'

interface Props {
	name: string
	imageSrc: string
	onImageClick?: () => void
}

const ProductCard: FC<Props> = props => {
	return (
		<Container>
			<Image
				src={props.imageSrc}
				alt={`${props.name}' Image`}
				onClick={props.onImageClick}
			/>
			<Content>
				<Name>{props.name}</Name>
			</Content>
		</Container>
	)
}

export default ProductCard
