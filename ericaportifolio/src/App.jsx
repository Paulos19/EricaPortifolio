import styles from "./App.module.css";


import { Contatos } from "./components/Contatos/Contatos";
import { Experiencias } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import {Navbar} from "./components/NavBar/Navbar";
import { Sobre } from "./components/NavBar/Sobre/Sobre";
import { Projetos } from "./components/Projetos/Projetos";


function App() {
  return (
   <div className={styles.App}>
    <Navbar />
    <Hero />
    <Sobre />
    <Experiencias />
    <Projetos />
    <Contatos />
  </div>
  );
  }

export default App
