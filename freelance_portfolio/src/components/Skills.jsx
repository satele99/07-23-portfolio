import styles from '../styles/Skills.module.css'

export default function Skills(){
    return (
        <section className={styles.section}>
            <h1 style={{fontSize: '2em'}}>Capabilities</h1>
            <div className={styles.listed}>
                <div className={styles.skill}>
                    <h3 className={styles.title}>Skill 1</h3>
                    <ul>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                    </ul>
                </div>
                <div className={styles.skill}>
                    <h3 className={styles.title}>Skill 2</h3>
                    <ul>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                    </ul>
                </div>
                <div className={styles.skill}>
                    <h3 className={styles.title}>Skill 3</h3>
                    <ul>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                    </ul>
                </div>
                
                
                
            </div>
        </section>
    )
}