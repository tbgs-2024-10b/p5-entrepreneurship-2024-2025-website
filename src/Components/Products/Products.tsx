import { FC, useCallback, useEffect, useState } from 'react'

import { toast } from 'react-toastify'

import { SectionContainer, SectionTitle } from 'Components/Common'

import ProductsList, { Product } from 'Constants/Products'

import ProductCard from './ProductCard/ProductCard'
import { Content } from './Styles'

const correctEasterEggSequence = [
	'a49e62d9-3311-4e2e-9165-dce47e12d5d4', // Pop's & Crumbs
	'bba39427-adcc-4e6b-a4a0-186a63c38488', // Peablossom Iced Tea
	'95815cae-c435-425c-a7c8-13089ec5a471', // Jiglo
	'bba39427-adcc-4e6b-a4a0-186a63c38488', // Peablossom Iced Tea
	'a49e62d9-3311-4e2e-9165-dce47e12d5d4', // Pop's & Crumbs
	'95815cae-c435-425c-a7c8-13089ec5a471', // Jiglo
	'95815cae-c435-425c-a7c8-13089ec5a471', // Jiglo
	'bba39427-adcc-4e6b-a4a0-186a63c38488', // Peablossom Iced Tea
]

const Products: FC = () => {
	const [ImageClickHistory, SetImageClickHistory] = useState<string[]>([])

	const OnImageClick = useCallback((product: Product) => {
		SetImageClickHistory(prev => {
			const newHistory = [...prev, product.id]

			if (newHistory.length > 2 * correctEasterEggSequence.length) {
				newHistory.shift()
			}

			return newHistory
		})
	}, [])

	useEffect(() => {
		if (ImageClickHistory.length < correctEasterEggSequence.length) return

		for (let i = 0; i < correctEasterEggSequence.length; i++) {
			if (ImageClickHistory[i] !== correctEasterEggSequence[i]) return
		}

		toast.info('Easter Egg Unlocked! 🎉')
	}, [ImageClickHistory])

	return (
		<SectionContainer id='products'>
			<SectionTitle>Products</SectionTitle>
			<Content>
				{ProductsList.map((product, index) => (
					<ProductCard
						key={index}
						name={product.name}
						imageSrc={product.imageSrc}
						onImageClick={() => {
							OnImageClick(product)
						}}
					/>
				))}
			</Content>
		</SectionContainer>
	)
}

export default Products
