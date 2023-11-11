import Link from 'next/link'
import styles from './styles.module.css'

export default function Footer() {
    return(
      <footer className={styles.footer}>
        Made with ❤️ by&nbsp;
        <Link href="https://twitter.com/_mehmetpekcan" target="_blank">
          Mehmet Pekcan
        </Link>
      </footer>
    )
    
}