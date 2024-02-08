import React from 'react'

import styles from "./Contatos.module.css";
import { getImageUrl } from "../../utils";

export const Contatos = () => {
  return (
    <footer id="contatos" className={styles.container}>
        <div className={styles.text}>
            <h2 >Contatos</h2>
            <p>Sinta-se a vontade para Clicar!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl ("email.svg")} alt="email icon" />
                <a href="mailto:ericaalvins@gmail.com">Email</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl ("linkedin.svg")} alt="linkedin icon" />
                <a href="https://www.linkedin.com">Linkedin</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl ("whats.svg")} alt="whats icon" />
                <a href="https://web.whatsapp.com/">WhatsApp</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl ("insta.svg")} alt="insta icon" />
                <a href="https://www.instagram.com/">Instagram</a>
            </li>
        </ul>
    </footer>
    
  )
}
