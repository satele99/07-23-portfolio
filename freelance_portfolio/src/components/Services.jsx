import styles from '../styles/Services.module.css'

export default function Services() {
    return (
        <section className={styles.section}>
            <h1 style={{fontSize: '2em'}}>Services</h1>
            <div className={styles.flex_content}>
                <div>
                   <div className={styles.service}>
                        <h4>Front End Development</h4>
                        <p>
                            As a dedicated freelance web developer, I strive to bring 
                            ideas to life through 
                            elegant code and captivating design.
                        </p>
                   </div>
                   <div className={styles.service}>
                        <h4>Website Maintainance</h4>
                        <p>
                            As a dedicated freelance web developer, 
                            I strive to bring ideas to life through 
                            elegant code and captivating design.
                        </p>
                   </div>
                </div>
                <div>
                    <div className={styles.service}>
                        <h4>SEO Optimization</h4>
                        <p>
                            As a dedicated freelance web developer, 
                            I strive to bring ideas to 
                            life through elegant code and captivating design.
                        </p>
                   </div>
                </div>
            </div>
        </section>
    )
}