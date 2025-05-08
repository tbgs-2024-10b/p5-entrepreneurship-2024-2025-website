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
						imageSrc={product.imageSrc}
					/>
				))}
			</Content>
		</SectionContainer>
	)
}

export default Products
