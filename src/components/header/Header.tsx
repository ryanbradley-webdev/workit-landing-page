import LogoLight from '../../assets/LogoLight'
import styles from './header.module.css'

export default function Header() {
    return (
        <header
            className={styles.header}
        >

            <LogoLight />

            <a
                href='/'
                className={styles.link}
            >
                Apply for access
            </a>

        </header>
    )
}