import styles from '../styles/Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div>
                    <h4>Company Name</h4>
                </div>
                <div>
                <ul className={styles.footer_ul}>
                    <li><a>Services</a></li>
                    <li><a>Portfolio</a></li>
                    <li><Link to={'/blog'}>My Blog</Link></li>
                    <li><a>About Me</a></li>
                </ul>
                </div>
                <div>
                    <h4>social links</h4>
                </div>
                <div>
                    <h4>Address</h4>
                </div>
            </div>
        </footer>
    )
}