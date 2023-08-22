import FeatureDetail from './components/FeatureDetail'
import styles from './features.module.css'

export default function Features() {
    return (
        <section
            className={styles.features}        
        >

            <FeatureDetail
                number={1}
                title='Actionable insights'
                content='Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.'
            />

            <FeatureDetail
                number={2}
                title='Data-driven decisions'
                content='Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.'
            />

            <FeatureDetail
                number={3}
                title='Always affordable'
                content='Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.'
            />

        </section>
    )
}