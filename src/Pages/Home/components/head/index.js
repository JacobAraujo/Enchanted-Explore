import React from "react";
import ImagemBrenda from "../../components/images/brenda-head.png"
import styles from './head.module.css';

const Head = () => {
    return(
        <header className={styles.container}>
            <div className={`${styles.contentInfo} row`}> {/* info */}
                <div className={`${styles.image}`}>
                    <img src={ImagemBrenda} className='img-fluid' alt='Perfil'></img>
                </div>
                <div>
                    <h1>Enchanted Explore (Em Breve Novas Categorias)</h1>
                    <p>Receba wallpapers com qualidade original e praticidade por e-mail. Envie um e-mail para:</p>
                    <p>baixarwallpaperincrivelhd@gmail.com e diga qual wallpaper você gostaria de receber, ou utilize o nosso chat, deixe sua</p>
                    <p>mensagem e o seu e-mail para contato.</p>
                    <p>Tempo máximo de retorno: 24 horas.</p>
                </div>    
            </div>
            <nav className={`${styles.contentNav}`}> {/* navegacao */}
                <a className={`${styles.inicio}`}>Inicio</a>
                <a>Blog</a>
                <a className={styles.instagram} >
                    <span className={styles.logoInsta} />
                </a>
                <a className={`${styles.email}`} >baixarwallpaperincrivelhd@gmail.com</a>
            </nav>
        </header>
    )
}

export default Head