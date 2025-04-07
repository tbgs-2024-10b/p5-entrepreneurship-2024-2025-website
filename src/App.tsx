import { FC } from 'react'

import AboutUs from 'Components/AboutUs/AboutUs'
import Header from 'Components/Header/Header'
import Hero from 'Components/Hero/Hero'

const App: FC = () => {
	return (
		<>
			<Header />
			<Hero />
			<AboutUs />
		</>
	)
}

export default App
