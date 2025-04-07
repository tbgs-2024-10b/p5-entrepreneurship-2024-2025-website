import { FC } from 'react'

import AboutUs from 'Components/AboutUs/AboutUs'
import ContactUs from 'Components/ContactUs/ContactUs'
import Footer from 'Components/Footer/Footer'
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
			<Footer />
		</>
	)
}

export default App
