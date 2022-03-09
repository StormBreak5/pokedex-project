import Link from 'next/link'
import styles from './styles.module.scss'

export default function Sidebar(props) {
    const { handleRegion } = props
    // function fetchKantoPokemon() {
    //     fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    //         .then(response => response.json())
    //         .then(allpokemon => console.log(allpokemon))
    // }

    return (
        <>
            <section className={styles.sidebarContainer}>
                <nav className={styles.sidebarContent}>
                    <button onClick={() => handleRegion('')}>All regions</button>
                    <button onClick={() => handleRegion('kanto')}>Kanto</button>
                    <button onClick={() => handleRegion('johto')}>Johto</button>
                    <button onClick={() => handleRegion('hoenn')}>Hoenn</button>
                    <button onClick={() => handleRegion('sinnoh')}>Sinnoh</button>
                    <button onClick={() => handleRegion('unova')}>Unova</button>
                    <button onClick={() => handleRegion('kalos')}>Kalos</button>
                    <button onClick={() => handleRegion('alola')}>Alola</button>
                    <button onClick={() => handleRegion('galar')}>Galar</button>
                    <button onClick={() => handleRegion('no-region')}>No region</button>
                </nav>
            </section>
        </>
    )
}