import React from 'react'
import {throttle} from '../utils/debounce'

const _cb = () => console.log('default callback')

export function useWindowSize(func = _cb) {
	const handleResize = throttle(func, 80)
	React.useEffect(() => {
		// Add event listener
		window.addEventListener('resize', handleResize, {passive: true})

		handleResize()
		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleResize)
	}) // Empty array ensures that effect is only run on mount
}
