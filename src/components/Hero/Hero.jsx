import React from 'react';
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';
export const  Hero=()  => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm Mahshid
                </h1>
                <p className={styles.description}>
                A skilled and self-motivated Full Stack Web Developer with extensive experience in the Back End, Front End, Database Concept, Web and Software Development. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                </p>
                <a href='mailto:mahshid.nabati@gmail.com' className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/avatar.png")} className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}