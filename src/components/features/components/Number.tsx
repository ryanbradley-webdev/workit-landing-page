import { ReactNode } from 'react'
import styles from '../features.module.css'

export default function Number({
    children
}: {
    children: ReactNode
}) {
    return (
        <div
            className={styles.number}
        >
            
            {children}

        </div>
    )
}