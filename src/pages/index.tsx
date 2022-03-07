import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { api } from '../services/api'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    api.get('pokemon').then(({ data }) => {
      setPokemons(data.results)
    })

    console.log(pokemons)

  }, [])

  return (
    <>
      <Head>
        <title>Pokédex</title>
      </Head>

      <section className={styles.pageContent}>
        <h2>Pokémons</h2>
        <ul className={styles.pokemons}>

          {pokemons.map(pokemon => {
            return (
              <li key={pokemon.id} className={styles.pokemonContainer}>
                <div className={styles.pokemonContent}>
                  <img src="/images/pikachu.png" alt="Pikachu" />
                  <strong>Pikachu</strong>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default Home