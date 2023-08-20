import { ReactNode } from 'react'
import styles from './button.module.css'

export default function Button({
    children
}: {
    children: ReactNode
}) {
    return (
        <button
            className={styles.button}
        >

            {children}

        </button>
    )
}