import React from 'react'

export type ContextType = {
	loading: boolean
	separatorCounter: number
	setSeparatorCount?: React.Dispatch<React.SetStateAction<number>>
}

const PageContext: React.Context<ContextType> = React.createContext({} as ContextType)
export default PageContext

export const PageProvider = ({children}: {children: any}) => {
	const [loading, setLoading] = React.useState(true)
	const [separatorCounter, setSeparatorCount] = React.useState(0)
	let _loadTimeout: null | NodeJS.Timeout = null

	const contextData = React.useMemo(
		() => ({
			loading: loading,
			separatorCounter: separatorCounter,
			setSeparatorCount: setSeparatorCount,
		}),
		[loading, separatorCounter, setSeparatorCount],
	)

	React.useEffect(() => {
		if (_loadTimeout) return

		_loadTimeout = setTimeout(() => {
			setLoading(false)
		}, 150)

		return () => {
			if (_loadTimeout) {
				clearTimeout(_loadTimeout)
				_loadTimeout = null
			}
		}
	}, [])

	return <PageContext.Provider value={contextData}>{children}</PageContext.Provider>
}
