import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return ( 
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Olá, me chamo Erica</h1>
        <p className={styles.description}>Eu sou a sua designer de interiores
        </p>
        <a href="mailto:ericaalvins@gmail.com" className={styles.contactBtn}>Entre em Contato</a>
    </div>
    <img src={getImageUrl("nav/dollImage.png")} alt="image" className={styles.Image}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
  );
};


