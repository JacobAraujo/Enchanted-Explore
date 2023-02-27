import React from "react";
import ImagemBrenda from "../../components/images/brenda-head.png"
import styles from './head.module.css';

const Head = () => {
    return(
        <header className={styles.container}>
            <div className={`${styles.contentInfo}`}> {/* info */}
                <div className={`${styles.image}`}>
                    <img src={ImagemBrenda} className='img-fluid' alt='Perfil'></img>
                </div>
                <div>
                    <h1>Enchanted Explore</h1>
                    <p>Faça parte da nossa comunidade de exploradores e encontre o wallpapers perfeito para você!. (Para baixar, utilize a ferramenta de download) Siga nossas redes sociais e fique por dentro de tudo o que acontece em cada nova exploração! Tem sugestões do que gostaria de encontrar por aqui? Deixe sua dica no nosso chat ! </p>
                    <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">icons created by joalfa - Flaticon COLOCAR EM ALGUM LUGAR </a>
                </div>    
            </div>
            <nav className={`${styles.contentNav}`}> {/* navegacao */}
                <a className={`${styles.inicio}`} href="http://localhost:3000">Inicio</a>
                <a className={styles.instagram} href="https://www.instagram.com/enchanted_explore/" target={'_blank'}>
                    <span className={styles.logoInsta} />
                </a>
                <a className={`${styles.email}`}>baixarwallpaperincrivelhd@gmail.com</a>
            </nav>
        </header>
    )
}

export default Head