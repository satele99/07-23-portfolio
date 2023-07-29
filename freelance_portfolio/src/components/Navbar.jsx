import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.navigation}>
            <div className={styles.nav_content}>
                <div className={styles.nav_header}>
                    <h4>Amir Ali</h4>
                </div>
                <ul className={styles.nav_ul}>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>About Me</li>
                    <li><button>BUTTON</button></li>
                </ul>
            </div>
        </nav>
    )
}