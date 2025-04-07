import { useCallback, useEffect, useState } from 'react'

export interface IDimension {
	width: number
	height: number
}

const useWindowDimension = (): IDimension => {
	const [Dimension, SetDimension] = useState(() => ({
		width: window.innerWidth,
		height: window.innerHeight,
	}))

	const OnResize = useCallback(() => {
		SetDimension({
			width: window.innerWidth,
			height: window.innerHeight,
		})
	}, [])

	useEffect(() => {
		addEventListener('resize', OnResize)

		return () => removeEventListener('resize', OnResize)
	}, [OnResize])

	return Dimension
}

export default useWindowDimension
