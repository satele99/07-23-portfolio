import styles from '../styles/Section.module.css'

export default function Section() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div>
                    <h1>Text Content, Text Content</h1>
                </div>
                <div className={styles.action_btn}>
                    <button className={styles.btn}>Portfolio</button>
                    <button className={styles.btn}>Work with Me</button>
                </div>
            </div>
        </section>
    )
}