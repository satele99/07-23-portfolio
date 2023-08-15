import styles from '../styles/Section.module.css'

export default function Section() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <h1>text that Introduces who i am,
                            what I do/offer,
                            and how i can help the customer.
                        </h1>
                    </div>
                    <div className={styles.action_btn}>
                        <button className={styles.btn}>Portfolio</button>
                        <button className={styles.btn_transparent}>Work with Me</button>
                    </div>
                </div>
                <div className={styles.content}>
                    <div>
                        <h1>Image</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}