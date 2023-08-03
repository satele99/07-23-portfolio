import { useState } from 'react'
import styles from '../styles/Nav.module.css'

export default function Nav() {

    const [icon, setIcon] = useState('bi bi-list')
    const [visibility, setVisibility] = useState('none')
    const respToggle = () => {
        const dropdown = document.querySelector('dropdown_content')
        setVisibility(visibility === 'none' ? 'flex' : 'none')
        setIcon(icon === 'bi bi-x-lg' ? 'bi bi-list' : 'bi bi-x-lg')
    }
    return (
        <nav className={styles.navigation}>
            <div className={styles.nav_content}>
                <div className={styles.nav_header}>
                    <h2>Amir Ali</h2>
                </div>
                <ul className={styles.nav_ul}>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>My Blog</li>
                    <li>About Me</li>
                    <li><button className={styles.nav_btn}>Button</button></li>
                </ul>
                <ul className={styles.dropdown}>
                    <li><button className={styles.nav_btn}>Button</button></li>
                    <li className={styles.icon}>
                        <i className={icon} onClick={()=> {respToggle()}}></i>
                    </li>
                </ul>
                <ul className={styles.dropdown_content} style={{display: visibility}}>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>My Blog</li>
                    <li>About Me</li>
                </ul>
            </div>
        </nav>
    )
}