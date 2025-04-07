interface Product {
	name: string
	description: string
	imageSrc: string
}

const Products = [
	{
		name: 'Cake Pop',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quisquam quo magni incidunt dolore adipisci. Ad quibusdam minima magnam laudantium dolorum hic culpa temporibus. Itaque repudiandae quisquam veritatis consequuntur sequi sint recusandae commodi doloremque? Quod laudantium ea sit voluptatem suscipit, minus deleniti doloremque eum aspernatur, commodi quam tempora velit distinctio?',
		imageSrc:
			'https://maludesign.vn/wp-content/uploads/2021/03/ti-le-khung-hinh-1-1-800x800.png',
	},
	{
		name: 'Jelly Balls',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quisquam quo magni incidunt dolore adipisci. Ad quibusdam minima magnam laudantium dolorum hic culpa temporibus. Itaque repudiandae quisquam veritatis consequuntur sequi sint recusandae commodi doloremque? Quod laudantium ea sit voluptatem suscipit, minus deleniti doloremque eum aspernatur, commodi quam tempora velit distinctio?',
		imageSrc:
			'https://maludesign.vn/wp-content/uploads/2021/03/ti-le-khung-hinh-1-1-800x800.png',
	},
	{
		name: 'Teh Telang',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quisquam quo magni incidunt dolore adipisci. Ad quibusdam minima magnam laudantium dolorum hic culpa temporibus. Itaque repudiandae quisquam veritatis consequuntur sequi sint recusandae commodi doloremque? Quod laudantium ea sit voluptatem suscipit, minus deleniti doloremque eum aspernatur, commodi quam tempora velit distinctio?',
		imageSrc:
			'https://maludesign.vn/wp-content/uploads/2021/03/ti-le-khung-hinh-1-1-800x800.png',
	},
] as const satisfies Product[]

export default Products
