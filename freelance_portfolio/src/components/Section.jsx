import styles from '../styles/Section.module.css'

export default function Section() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <h1 style={{textAlign: 'left', fontSize: '2em'}}>Crafting Digital Experiences</h1>
                        <p style={{textAlign: 'left', opacity: '.85'}}> 
                            As a dedicated freelance web developer, 
                            I strive to bring ideas to life through elegant 
                            code and captivating design. Explore my portfolio and 
                            discover how I can transform your vision into an 
                            interactive reality.
                        </p>
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