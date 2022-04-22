import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { api } from '../services/api'
import styles from '../styles/Home.module.scss'

const Home: NextPage = (props) => {
  const [pokemons, setPokemons] = useState<any[]>([])
  const { selectedRegion } = props

  useEffect(() => {
    let url = 'pokemon?offset=0&limit=898';


    if (selectedRegion === 'kanto') {
      url = 'pokemon?offset=0&limit=151'
    } if (selectedRegion === 'johto') {
      url = 'pokemon?offset=151&limit=100'
    } if (selectedRegion === 'hoenn') {
      url = 'pokemon?offset=251&limit=135'
    } if (selectedRegion === 'sinnoh') {
      url = 'pokemon?offset=386&limit=107'
    } if (selectedRegion === 'unova') {
      url = 'pokemon?offset=493&limit=156'
    } if (selectedRegion === 'kalos') {
      url = 'pokemon?offset=649&limit=72'
    } if (selectedRegion === 'alola') {
      url = 'pokemon?offset=721&limit=86'
    } if (selectedRegion === 'galar') {
      url = 'pokemon?offset=809&limit=89'
    } if (selectedRegion === 'no-region') {
      url = 'pokemon?offset=807&limit=2'
    }

    api.get(url).then(({ data }) => {
      setPokemons(data.results)
    })
  }, [selectedRegion])

  return (
    <>
      <Head>
        <title>Pokédex</title>
      </Head>

      <section className={styles.pageContent}>
        <h2>Pokémons</h2>
        <ul className={styles.pokemons}>

          {pokemons.map(pokemon => {
            const pokemonIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
            return (
              <li key={pokemon.id} className={styles.pokemonContainer}>
                <div className={styles.pokemonContent}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
                    alt={pokemon.name}
                  />
                  <strong>{pokemon.name}</strong>
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