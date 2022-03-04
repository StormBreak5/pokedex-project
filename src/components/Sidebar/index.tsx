import Link from 'next/link'
import styles from './styles.module.scss'

export default function Sidebar() {
    return (
        <>
            <section className={styles.sidebarContainer}>
                <nav className={styles.sidebarContent}>
                    <Link href="#">
                        <a>Kanto</a>
                    </Link>
                    <Link href="#">
                        <a>Johto</a>
                    </Link>
                    <Link href="#">
                        <a>Hoenn</a>
                    </Link>
                    <Link href="#">
                        <a>Sinnoh</a>
                    </Link>
                    <Link href="#">
                        <a>Unova</a>
                    </Link>
                    <Link href="#">
                        <a>Kalos</a>
                    </Link>
                    <Link href="#">
                        <a>Alola</a>
                    </Link>
                    <Link href="#">
                        <a>Galar</a>
                    </Link>
                </nav>
            </section>
        </>
    )
}