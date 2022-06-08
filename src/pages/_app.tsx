import React from 'react'
import type { AppProps } from 'next/app'
import Page from '@/src/layout/Page'

import '@/src/styles/global.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  )
}

export default App
