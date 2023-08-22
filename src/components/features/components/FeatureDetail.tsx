import styles from '../features.module.css'
import Number from './Number'

export default function FeatureDetail({
    number,
    title,
    content
}: {
    number: number
    title: string
    content: string
}) {
    return (
        <div
            className={styles.feature_detail}
        >

            <Number>
                {number}
            </Number>

            <div>

                <h3>
                    {title}
                </h3>

                <p>
                    {content}
                </p>

            </div>

        </div>
    )
}