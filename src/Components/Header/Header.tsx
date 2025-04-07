import { FC } from 'react'

import useWindowDimension from 'Hooks/useWindowDimension'

import DesktopHeader from './DesktopHeader/DesktopHeader'
import MobileHeader from './MobileHeader/MobileHeader'

const Header: FC = () => {
	const { width } = useWindowDimension()

	return width < 500 ? <MobileHeader /> : <DesktopHeader />
}

export default Header
