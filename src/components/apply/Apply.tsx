import Button from '../button/Button'
import styles from './apply.module.css'

export default function Apply() {
    return (
        <section
            className={styles.apply}
        >

            <img
                src='/image-founder.webp'
                alt=''
            />

            <div>

                <h2>
                    Be the first to test
                </h2>

                <p>
                    Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I&apos;ll be in touch to schedule a call.
                </p>

                <Button>
                    Apply for access
                </Button>

            </div>

        </section>
    )
}