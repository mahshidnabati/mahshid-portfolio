import {useState} from 'react';
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"
export const Navbar=()=>{
    const[menueOpen,setMenuOpen]=useState(false)
    return (
        <nav className={styles.navbar}>
            <a href='/' className={styles.title}>
                <img src={getImageUrl("nav/witch.png")} />
                <b>Prortfolio</b>
            </a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={
                    menueOpen
                        ? getImageUrl("nav/closeIcon.png")
                        : getImageUrl("nav/menuIcon.png")
                } alt="menu-button"
                onClick={()=>setMenuOpen(!menueOpen)}
                />
                <ul className={`${styles.menuItems} ${menueOpen && styles.menuOpen}`} onClick={()=> setMenuOpen(false)}>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
