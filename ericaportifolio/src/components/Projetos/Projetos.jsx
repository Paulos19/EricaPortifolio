import React from 'react'

import styles from "./Projetos.module.css";

import projetos from "../../data/projetos.json";
import { ProjetosCard } from './ProjetosCard';


export const Projetos = () => {
  return (
   <section className={styles.container} id="projetos">
    <h2 className={styles.title}>Projetos</h2>
    <div className={styles.projetos}>
        {projetos.map((projetos, id) => {
            return <ProjetosCard key={id} projetos={projetos} />;
        })}
    </div>
   </section>
  );
};
