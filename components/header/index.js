import Link from 'next/link'
import styles from './styles.module.css'

export default function Header() {
    return(
        <header className={`${styles.header} container fluid`}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logo} href="/">NETFILMS
          </Link>
          <nav className={styles.navigationMenu}>
            <Link href="#">MOVIES</Link>
            <Link href="#">SERIES</Link>
            <Link href="#">KIDS</Link>
          </nav>
        </div>
      </header>
    )
}