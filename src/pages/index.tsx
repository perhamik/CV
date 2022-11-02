import data from '@/src/data.json'

import layout from '@/src/styles/Layout.module.scss'
import Profile from '@/src/components/Profile'
import Contact from '@/src/components/Contact'
import Separator from '@/src/components/Separator'
import Skills from '@/src/components/Skills'
import Social from '@/src/components/Social'
import Summary from '@/src/components/Summary'
import Work from '@/src/components/Work'
import { useContext } from 'react'
import PageContext from '../context/PageContext'
import Head from 'next/head'
import Portfolio from '../components/Portfolio'

function Home() {
  const _contactInfo = {
    email: data.basics.email,
    phone: data.basics.phone,
    location: data.basics.location,
  }

  const { loading } = useContext(PageContext)

  return (
    <>
      <Head>
        <title>CV-Denys-Yaroshenko</title>
      </Head>
      <div className={layout.cv} role="main">
        <div data-index={2} className={layout.cv__left} data-loaded={!loading}>
          <Profile person={data.basics.name} scope={data.basics.label} />
          <Contact info={_contactInfo} />
          <Separator data-index={3} />
          <Skills skills={data.skills} />
          <Social social={data.basics.profiles} />
        </div>
        <div data-index={0} className={layout.cv__right} data-loaded={!loading}>
          <Summary content={data.basics.summary} />
          <Separator dark data-index={5} />
          <Portfolio projects={data.publications} />
          <Separator dark data-index={5} />
          <Work work={data.work} education={data.education} />
        </div>
      </div>
    </>
  )
}

export default Home
