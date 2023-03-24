import React from 'react'
import type {AppProps} from 'next/app'
import Page from '@/src/layout/Page'
import {useWindowSize} from '@/src/hooks'
import {setVH} from '@/src/utils'

import '@/src/styles/global.scss'

function App({Component, pageProps}: AppProps) {
	useWindowSize(() => {
		setVH()
	})
	return (
		<>
			<Page>
				<Component {...pageProps} />
			</Page>
		</>
	)
}

export default App
