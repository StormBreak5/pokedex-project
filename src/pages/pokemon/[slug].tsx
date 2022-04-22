import Head from 'next/head';
import styles from './styles.module.scss';

export default function Pokemon() {
    return (
        <>
            <Head>
                <title>Gardevoir | Pokédex</title>
            </Head>
            <section className={styles.pokemonContainer}>
                <div className={styles.nameContainer}>
                    <h1>Gardevoir</h1>
                    <small>Nº 282</small>
                </div>

                <div className={styles.infoContainer}>

                    <img
                        src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/282.svg"
                        alt="Gardevoir"
                        className={styles.imageContainer}
                    />

                    <section >
                        <section className={styles.pokemonInfo}>
                            <div>
                                <p>Species: <span>Embrace Pokémon</span></p>
                                <p>Abbilities: <span>Synchronize, Trace, Telepathy (H)</span></p>
                            </div>
                            <div>
                                <p>Height: <span>1.6 m / 5'3"</span></p>
                                <p>Weight: <span>48.4 kg / 106.7 lbs</span></p>
                            </div>
                        </section>

                        <section>
                            <div className={styles.pokemonEvolution}>
                                <h3>Evolutionary Chain</h3>

                            </div>
                        </section>
                    </section>
                </div>
            </section>
        </>
    )
}
