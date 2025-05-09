import { FC } from 'react'

import { ToastContainer } from 'react-toastify'

import Ads from 'Components/Ads/Ads'
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
			<Ads />
			<PWAUpdate />
			<ToastContainer />
		</>
	)
}

export default App
