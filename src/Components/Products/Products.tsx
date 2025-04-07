import { FC } from 'react'

import { SectionContainer, SectionTitle } from 'Components/Common'

import ProductCard from './ProductCard/ProductCard'
import { Content } from './Styles'

const Products: FC = () => {
	return (
		<SectionContainer id='products'>
			<SectionTitle>Products</SectionTitle>
			<Content>
				<ProductCard
					name='Cake Pop'
					description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quisquam quo magni incidunt dolore adipisci. Ad quibusdam minima magnam laudantium dolorum hic culpa temporibus. Itaque repudiandae quisquam veritatis consequuntur sequi sint recusandae commodi doloremque? Quod laudantium ea sit voluptatem suscipit, minus deleniti doloremque eum aspernatur, commodi quam tempora velit distinctio?'
					imageSrc='https://maludesign.vn/wp-content/uploads/2021/03/ti-le-khung-hinh-1-1-800x800.png'
				/>
				<ProductCard
					name='Jelly Balls'
					description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quisquam quo magni incidunt dolore adipisci. Ad quibusdam minima magnam laudantium dolorum hic culpa temporibus. Itaque repudiandae quisquam veritatis consequuntur sequi sint recusandae commodi doloremque? Quod laudantium ea sit voluptatem suscipit, minus deleniti doloremque eum aspernatur, commodi quam tempora velit distinctio?'
					imageSrc='https://maludesign.vn/wp-content/uploads/2021/03/ti-le-khung-hinh-1-1-800x800.png'
				/>
				<ProductCard
					name='Teh Telang'
					description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quisquam quo magni incidunt dolore adipisci. Ad quibusdam minima magnam laudantium dolorum hic culpa temporibus. Itaque repudiandae quisquam veritatis consequuntur sequi sint recusandae commodi doloremque? Quod laudantium ea sit voluptatem suscipit, minus deleniti doloremque eum aspernatur, commodi quam tempora velit distinctio?'
					imageSrc='https://maludesign.vn/wp-content/uploads/2021/03/ti-le-khung-hinh-1-1-800x800.png'
				/>
			</Content>
		</SectionContainer>
	)
}

export default Products
