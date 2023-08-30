import styles from '../styles/MidSection.module.css'

export default function MidSection() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h1 style={{fontSize: '2em'}}>Projects</h1>
                <p>
                    Here's a glimpse into some of the projects 
                    that have captured my passion and expertise.
                </p>
                <div className={styles.grid}>
                    <a>Zenbody Project</a>
                    <a>Client Project</a>
                    <a>Client Project</a>
                    <a>Client Project</a>
                </div>
            </div>
        </section>
    )
}