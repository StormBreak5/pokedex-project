import '../styles/globals.scss'
import styles from '../styles/app.module.scss'

import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedRegion, setSelectedRegion] = useState('')

  function handleRegion(region: string) {
    setSelectedRegion(region)
  }

  return (
    <>
      <div >
        <Header />
        <main className={styles.wrapper}>
          <Sidebar handleRegion={handleRegion} />
          <Component {...pageProps} selectedRegion={selectedRegion} />
        </main>
      </div>
    </>
  )
}

export default MyApp
