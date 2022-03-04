import '../styles/globals.scss'
import styles from '../styles/app.module.scss'

import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div >
        <Header />
        <main className={styles.wrapper}>
          <Sidebar />
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
