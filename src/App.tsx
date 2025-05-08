import { FC } from 'react'

import Footer from 'Components/Footer/Footer'
import Header from 'Components/Header/Header'
import Hero from 'Components/Hero/Hero'
import Products from 'Components/Products/Products'

const App: FC = () => {
	return (
		<>
			<Header />
			<Hero />
			<Products />
			<Footer />
		</>
	)
}

export default App
