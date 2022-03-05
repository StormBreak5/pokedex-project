import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokédex</title>
      </Head>

      <section className={styles.pageContent}>
        <h2>Pokémons</h2>
        <ul className={styles.pokemons}>
          <li className={styles.pokemonContainer}>
            <div className={styles.pokemonContent}>
              <img src="/images/pikachu.png" alt="Pikachu" />
              <strong>Pikachu</strong>
            </div>
          </li>
          <li className={styles.pokemonContainer}>
            <div className={styles.pokemonContent}>
              <img src="/images/pikachu.png" alt="Pikachu" />
              <strong>Pikachu</strong>
            </div>
          </li>
          <li className={styles.pokemonContainer}>
            <div className={styles.pokemonContent}>
              <img src="/images/pikachu.png" alt="Pikachu" />
              <strong>Pikachu</strong>
            </div>
          </li>
          <li className={styles.pokemonContainer}>
            <div className={styles.pokemonContent}>
              <img src="/images/pikachu.png" alt="Pikachu" />
              <strong>Pikachu</strong>
            </div>
          </li>
          <li className={styles.pokemonContainer}>
            <div className={styles.pokemonContent}>
              <img src="/images/pikachu.png" alt="Pikachu" />
              <strong>Pikachu</strong>
            </div>
          </li>
          <li className={styles.pokemonContainer}>
            <div className={styles.pokemonContent}>
              <img src="/images/pikachu.png" alt="Pikachu" />
              <strong>Pikachu</strong>
            </div>
          </li>
          <li className={styles.pokemonContainer}>
            <div className={styles.pokemonContent}>
              <img src="/images/pikachu.png" alt="Pikachu" />
              <strong>Pikachu</strong>
            </div>
          </li>
          <li className={styles.pokemonContainer}>
            <div className={styles.pokemonContent}>
              <img src="/images/pikachu.png" alt="Pikachu" />
              <strong>Pikachu</strong>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Home