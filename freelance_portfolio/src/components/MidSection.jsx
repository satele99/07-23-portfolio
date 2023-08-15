import styles from '../styles/MidSection.module.css'

export default function MidSection() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.grid}>
                    <a>Project</a>
                    <a>Project</a>
                    <a>Project</a>
                    <a>Project</a>
                </div>
            </div>
        </section>
    )
}