import styles from '../styles/Skills.module.css'

export default function Skills(){
    return (
        <section className={styles.section}>
            <h1 style={{fontSize: '2em'}}>Capabilities</h1>
            <div className={styles.listed}>
                <div className={styles.skill}>
                    <h3 className={styles.title}>UX/UI Design</h3>
                    <ul>
                        <li>User Experience Design</li>
                        <li>User Interface Design</li>
                        <li>Interaction Design</li>
                    </ul>
                </div>
                <div className={styles.skill}>
                    <h3 className={styles.title}>Development</h3>
                    <ul>
                        <li>Front End Development</li>
                        <li>Back End Development</li>
                        <li>Full Stack Development</li>
                        <li>Animations</li>
                        <li>Responsive & Mobile Sites</li>
                    </ul>
                </div>
                <div className={styles.skill}>
                    <h3 className={styles.title}>Product Design</h3>
                    <ul>
                        <li>Responsive & Mobile Sites</li>
                        <li>Brand Visuals</li>
                        <li>Visual Character</li>
                    </ul>
                </div>
                
                
                
            </div>
        </section>
    )
}