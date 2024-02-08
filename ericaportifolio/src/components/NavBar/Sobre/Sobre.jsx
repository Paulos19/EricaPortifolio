import React from 'react'

import styles from "./Sobre.module.css";
import { getImageUrl } from '../../../utils';

export const Sobre = () => {
  return (
     <section className={styles.container} id="sobre">
        <h2 className={styles.title}>Sobre</h2>
        <div className={styles.content}>
            <img src={getImageUrl("sobreIcon.png")} alt="Sobre Icon" className={styles.sobreImage}/>
        <ul className={styles.sobreItems}>
            <li className={styles.sobreItem}>
                <img src={getImageUrl("cursorIcon.png")} alt="cursor"/>
                <div className={styles.sobreImageText}>
                    <h3>Design de Interiores</h3>
                    <p>Designer de Interiores com experiência em V-Ray, AutoCad e Sketchup. Pronta para realizar seus sonhos!</p>
                </div>
            </li>
            <li className={styles.sobreItem}>
                <img src={getImageUrl("monitorIcon.png")} alt="monitor"/>
                <div className={styles.sobreImageText}>
                    <h3>Especialidades</h3>
                    <p>V-Ray, Sketchup e AutoCad</p>
                </div>
            </li>
            <li className={styles.sobreItem}>
                <img src={getImageUrl("sobremimIcon.png")} alt="Sobre mim"/>
                <div className={styles.sobreImageText}> 
                    <h3>Mais sobre mim</h3>
                    <p>Erica, 21 anos, recem formada e com o objetivo de realizar sonhos.
                        Atualmente moradora de Brasília, no Distrito Federal, solteira, sem filhos e em busca de oportunidades para demonstrar minhas habilidades e contribuir com a empresa ou cliente
                    </p>
                </div>
            </li>
        </ul>
        </div>
     </section>
  );
};

