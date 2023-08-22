import Facebook from '../../assets/Facebook'
import Instagram from '../../assets/Instagram'
import LogoDark from '../../assets/LogoDark'
import Twitter from '../../assets/Twitter'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer
            className={styles.footer}
        >

            <LogoDark />

            <div
                className={styles.socials}
            >
                <button>
                    <Facebook />
                </button>
                
                <button>
                    <Twitter />
                </button>
                
                <button>
                    <Instagram />
                </button>
                

            </div>

        </footer>
    )
}