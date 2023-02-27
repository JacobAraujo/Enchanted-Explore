import React from "react";
import { useEffect } from "react";
import styles from './cover.module.css'

const Cover = () => {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      function handleScroll() {
        const scrollPosition = window.scrollY;
        const image = document.querySelector('.image');
        image.style.backgroundPositionY = ` ${-20 - scrollPosition * 0.15}px`;
      }

    return(
        <div>
            <div className={`${styles.cover} `}>
                <div className={`${styles.present}`}>
                    <h1 className={`${styles.h1Present} h1 text-center`}>
                        Enchanted<br/> Explore
                    </h1>
                    <p className={styles.pPresent}>
                    Olá!, meu nome é Brenda Karine, tenho 22 anos, trabalho como criadora de ilustrações digitais desde 2022, transformando conceitos criativos em desenhos e ilustrações de qualidade. Apresento a minha coleção exclusiva de wallpapers de celular, inspirados nos lugares mais incríveis que já explorei. São imagens que vão te transportar para as mais belas paisagens, e te deixar ainda mais perto da natureza e dos segredos que ela esconde. Carregue um mundo de magia em seu bolso com os wallpapers da Enchanted Explore!. Você está livre para baixar e utilizar os wallpapers em seu fundo/bloqueio de tela de celular, (uso pessoal). Você não deve comercializar, vender, ou quaisquer outros meios que vá contra os diretores autorias, (previsto na lei de Nº 9.610). Todos os diretores reservados. Enchanted Explore.
                    </p>
                </div>
                <div className={`${styles.image} image`}>
                </div>
            </div>        
        </div>
    )
}

export default Cover;