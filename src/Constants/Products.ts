export interface Product {
	id: string
	name: string
	imageSrc: string
}

const Products = [
	{
		id: 'a49e62d9-3311-4e2e-9165-dce47e12d5d4',
		name: "Pop's & Crumbs",
		imageSrc: `${__PUBLIC_URL__}/images/PopAndCrumbs.png`,
	},
	{
		id: '95815cae-c435-425c-a7c8-13089ec5a471',
		name: 'Jiglo',
		imageSrc: `${__PUBLIC_URL__}/images/Jiglo.png`,
	},
	{
		id: 'bba39427-adcc-4e6b-a4a0-186a63c38488',
		name: 'Peablossom Iced Tea',
		imageSrc: `${__PUBLIC_URL__}/images/PeablossomIcedTea.png`,
	},
] as const satisfies Product[]

export default Products
