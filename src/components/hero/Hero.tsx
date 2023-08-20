import Button from '../button/Button'
import styles from './hero.module.css'

export default function Hero() {
    return (
        <section
            className={styles.hero}
        >

            <h1>
                Data <span className={styles.underline}>tailored</span> to your needs.
            </h1>

            <Button>
                Learn more
            </Button>

        </section>
    )
}