import { FC } from 'react'

import Hero from 'Components/Hero/Hero'
import PWAUpdate from 'Components/PWAUpdate/PWAUpdate'
import Products from 'Components/Products/Products'
import Rewards from 'Components/Rewards/Rewards'

const App: FC = () => {
	return (
		<>
			<Hero />
			<Products />
			<Rewards />
			<PWAUpdate />
		</>
	)
}

export default App
