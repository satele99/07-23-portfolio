import styles from '../styles/CallToAction.module.css'

export default function CallToAction(){
    return (
        <section className={styles.section}>
            <div>
                <h1>Ready to get started?</h1>
                <h4>Let's talk business.</h4>
            </div>
            <div className={styles.btn_div}>
                <button className={styles.btn}>Check out my work</button>
                <button className={styles.btn_transparent}>Message Me</button>
            </div>
        </section>
    )
}