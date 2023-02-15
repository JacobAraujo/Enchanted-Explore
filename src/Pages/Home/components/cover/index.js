import React from "react";
import styles from './cover.module.css'

const Cover = () => {
    return(
        <div className="container-fluid mx-0">
            <div className="row">
                <div className={`${styles.present} col-sm-6`}>
                    <h1 className={`${styles.h1Present} h1 text-center`}>
                        Enchanted<br/> Explore<br/> Wallpapers<br/>
                    </h1>
                    <p className={styles.pPresent}>
                        Olá!, meu nome é Brenda Karine, trabalho como criadora de ilustrações digitais desde 2022, transformando conceitos criativos em desenhos e ilustrações de qualidade. Faço obras criativas, únicas e encantadoras, usando Inteligência Artificial e Photoshop. Se você deseja usar alguns dos meus wallpaper em seu bloqueio ou fundo de tela de celular, (uso pessoal), sinta-se livre para escolher aquele que  mais combina com você :). Você não deve respostar, comercializar, vender, ou quaisquer outros meios que vá contra os diretores autorias, (previsto na lei de Nº 9.610). Todos os diretores reservados. Enchanted Explore
                    </p>
                </div>
            </div>        
        </div>
    )
}

export default Cover;