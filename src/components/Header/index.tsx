import styles from './styles.module.scss'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <a>
                        <img src="/images/logo.png" alt="Pokédex" />
                    </a>
                </Link>
            </div>
        </header>
    )
}