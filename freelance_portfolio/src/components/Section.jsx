import styles from '../styles/Section.module.css'
import images from '../images/IMG_6292.jpg'

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
                    <div className={styles.img_wrapper}>
                        <img src={images}/>
                    </div>
                    
                </div>
                <svg className={styles.design_element} style={{top: '13em', right: '11em' , transform: 'rotate(180deg)'}} viewBox="0 0 1194 1194" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M596.542 1193.08C486.693 795.367 397.718 706.392 9.59946e-05 596.542C397.718 486.693 486.761 397.718 596.543 -2.60757e-05C706.392 397.718 795.367 486.693 1193.08 596.542C795.367 706.392 706.392 795.367 596.542 1193.08Z" fill="#FFD439"/>
                </svg>
                <svg className={styles.design_element} style={{top: '38em', right: '15em' , transform: 'rotate(37deg)'}} viewBox="0 0 1194 1194" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M596.542 1193.08C486.693 795.367 397.718 706.392 9.59946e-05 596.542C397.718 486.693 486.761 397.718 596.543 -2.60757e-05C706.392 397.718 795.367 486.693 1193.08 596.542C795.367 706.392 706.392 795.367 596.542 1193.08Z" fill="#FFD439"/>
                </svg>
                <svg className={styles.design_element} style={{top: '22em', right: '-.5em', transform: 'rotate(15deg)'}} viewBox="0 0 1194 1194" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M596.542 1193.08C486.693 795.367 397.718 706.392 9.59946e-05 596.542C397.718 486.693 486.761 397.718 596.543 -2.60757e-05C706.392 397.718 795.367 486.693 1193.08 596.542C795.367 706.392 706.392 795.367 596.542 1193.08Z" fill="#FFD439"/>
                </svg>
            </div>
        </section>
    )
}