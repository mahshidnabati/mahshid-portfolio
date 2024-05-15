import React from 'react';

import styles from "./About.module.css"
import { getImageUrl } from '../../utils';

export const About=()=>{
    return(
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>
                About Me
            </h2>
            <div className={styles.content}>
                {/* <img src={getImageUrl("about/aboutImage.png")} className={styles.aboutImage}/> */}
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/frontend-development.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                            Driven and detail-oriented Frontend Developer with a passion for crafting engaging and user-friendly web experiences. Proficient in React.js, JavaScript, and Tailwind CSS, adept at translating complex designs and requirements into polished, responsive interfaces. Skilled in building dynamic, interactive web applications that prioritize both functionality and aesthetics. Continuously learning and staying updated with the latest technologies and best practices in frontend development.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/backend-development.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                            Dedicated Backend Developer with a proven track record of leveraging Node.js, Next.js, PHP, and a range of database technologies including MySQL, SQLite, and SQL Server to architect and implement robust server-side solutions. Experienced in building scalable, efficient APIs and web applications that seamlessly integrate with frontend systems. Proficient in utilizing Prisma for ORM (Object-Relational Mapping) to streamline database interactions and enhance data management processes.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/web-design.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Web Designer</h3>
                            <p>
                            Innovative and creative Web Designer with a keen eye for detail and a passion for crafting visually stunning and intuitive user experiences. Proficient in utilizing a variety of design tools and technologies, including Adobe Creative Suite (Photoshop, Illustrator), and Figma, to conceptualize and design responsive website layouts and interfaces. Continuously exploring new design trends and techniques to deliver cutting-edge solutions that exceed client expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}