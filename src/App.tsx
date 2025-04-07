import { FC } from 'react'

import AboutUs from 'Components/AboutUs/AboutUs'
import ContactUs from 'Components/ContactUs/ContactUs'
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
			<ContactUs />
		</>
	)
}

export default App
