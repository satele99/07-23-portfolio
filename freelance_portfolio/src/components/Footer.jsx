import styles from '../styles/Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div>
                    <h4>Amir - Freelance Web Developer</h4>
                </div>
                <div>
                <ul className={styles.footer_ul}>
                    <li><a>Services</a></li>
                    <li><a>Portfolio</a></li>
                    <li><Link to={'/blog'}>My Blog</Link></li>
                    <li><a>About Me</a></li>
                </ul>
                </div>
                <div className={styles.social_links}>
                    <i class="bi bi-github"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-twitter"></i>
                </div>
                <div className={styles.address}>
                    <h4>1404 Hidden Forest Ct</h4>
                    <p>Kennesaw, GA 30309</p>
                </div>
            </div>
            <div className={styles.copyrights}>
                <p>&copy; 2023 My Website. All rights reserved.</p>
                <p>Contact: example@example.com</p>
            </div>
        </footer>
    )
}