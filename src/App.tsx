import { FC } from 'react'

import Footer from 'Components/Footer/Footer'
import Header from 'Components/Header/Header'
import Hero from 'Components/Hero/Hero'
import Products from 'Components/Products/Products'
import Rewards from 'Components/Rewards/Rewards'

const App: FC = () => {
	return (
		<>
			<Header />
			<Hero />
			<Products />
			<Rewards />
			<Footer />
		</>
	)
}

export default App
