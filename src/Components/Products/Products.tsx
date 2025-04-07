import { FC } from 'react'

import { SectionContainer, SectionTitle } from 'Components/Common'

import ProductsList from 'Constants/Products'

import ProductCard from './ProductCard/ProductCard'
import { Content } from './Styles'

const Products: FC = () => {
	return (
		<SectionContainer id='products'>
			<SectionTitle>Products</SectionTitle>
			<Content>
				{ProductsList.map((product, index) => (
					<ProductCard
						key={index}
						name={product.name}
						description={product.description}
						imageSrc={product.imageSrc}
						inverted={index % 2 === 0}
					/>
				))}
			</Content>
		</SectionContainer>
	)
}

export default Products
