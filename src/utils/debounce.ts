// eslint-disable-next-line
export const throttle = (fn: Function, delay: number = 100) => {
	let isThrottled: boolean
	let lastFn: ReturnType<typeof setTimeout>
	let lastTime: number

	// eslint-disable-next-line
	function wrapper(this: any) {
		// eslint-disable-next-line
		const context = this
		// eslint-disable-next-line
		const args = arguments
		if (isThrottled) {
			clearTimeout(lastFn)
			lastFn = setTimeout(() => {
				if (Date.now() - lastTime >= delay) {
					fn.apply(context, args)
					lastTime = Date.now()
				}
			}, Math.max(delay - (Date.now() - lastTime), 0))
		} else {
			fn.apply(context, args)
			lastTime = Date.now()
			isThrottled = true
		}
	}

	return wrapper
}
