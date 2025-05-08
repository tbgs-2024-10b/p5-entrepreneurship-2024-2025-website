import { FC } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import { useRegisterSW } from 'virtual:pwa-register/react'

const PWAUpdate: FC = () => {
	const { updateServiceWorker } = useRegisterSW({
		onRegistered(registration) {
			console.log('SW Registered: ', registration)
		},
		onRegisterError(error) {
			console.log('SW registration error', error)
		},
		onOfflineReady() {
			toast.success('App is ready to work offline')
		},
		onNeedRefresh() {
			toast.info('New content available, click to refresh', {
				onClick: async () => {
					await updateServiceWorker(true)
				},
			})
		},
	})

	return <ToastContainer />
}

export default PWAUpdate
