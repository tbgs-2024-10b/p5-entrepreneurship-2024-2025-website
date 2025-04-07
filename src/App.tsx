import { FC } from 'react'

import AboutUs from 'Components/AboutUs/AboutUs'
import Header from 'Components/Header/Header'
import Hero from 'Components/Hero/Hero'
import Products from 'Components/Products/Products'

const App: FC = () => {
	return (
		<>
			<Header />
			<Hero />
			<AboutUs />
			<Products />
		</>
	)
}

export default App
