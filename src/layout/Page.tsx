import React from 'react'
import { PageProvider } from '@/src/context/PageContext'

function Page(props: { children: any }) {
  return <PageProvider>{props.children}</PageProvider>
}

export default Page
