interface Product {
	name: string
	imageSrc: string
}

const Products = [
	{
		name: "Pop's & Crumbs",
		imageSrc: `${__PUBLIC_URL__}/images/PopAndCrumbs.png`,
	},
	{
		name: 'Jiglo',
		imageSrc: `${__PUBLIC_URL__}/images/Jiglo.png`,
	},
	{
		name: 'Peablossom Iced Tea',
		imageSrc: `${__PUBLIC_URL__}/images/PeablossomIcedTea.png`,
	},
] as const satisfies Product[]

export default Products
