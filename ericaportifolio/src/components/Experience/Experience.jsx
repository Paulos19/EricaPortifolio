import React from 'react'

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils"

export const Experiencias = () => {
  return (
    <section className={styles.container} id="experiencias">
       <h2 className={styles.title}>Experiências</h2>
       <div className={styles.contant}>
        <div className={styles.skills}>
            {skills.map((skill, id) => {
                return (
                     <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    </div>
                    <p>{skill.title}</p>
                    </div>
                );
            })}
            </div>
            </div>
    </section>
  )
}

