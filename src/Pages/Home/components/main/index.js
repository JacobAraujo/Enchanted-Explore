import React from "react";
import styles from "./main.module.css"  

const Main = () => {

    const imagens = [
        { nome: 'imagem1.jpg', caminho: './images/Enchanted Explore 1.jpg', descricao: 'Descrição da imagem 1' },
        { nome: 'Surf Cósmico', caminho: './images/Enchanted Explore 2.png', descricao: 'Descrição da imagem 2' },
        { nome: 'imagem3.jpg', caminho: './images/Enchanted Explore 3.jpg', descricao: 'Descrição da imagem 2' },
        { nome: 'imagem4.jpg', caminho: './images/Enchanted Explore 4.png', descricao: 'Descrição da imagem 2' },
        { nome: 'imagem5.jpg', caminho: './images/Enchanted Explore 5.png', descricao: 'Descrição da imagem 2' },
        { nome: 'imagem6.jpg', caminho: './images/Enchanted Explore 6.png', descricao: 'Descrição da imagem 2' },
        { nome: 'imagem7.jpg', caminho: './images/Enchanted Explore 7.jpg', descricao: 'Descrição da imagem 2' },
        { nome: 'imagem8.jpg', caminho: './images/Enchanted Explore 8.jpg', descricao: 'Descrição da imagem 2' },
        { nome: 'imagem9.jpg', caminho: './images/Enchanted Explore 9.jpg', descricao: 'Descrição da imagem 2' },
        { nome: 'imagem10.jpg', caminho: './images/Enchanted Explore 17.jpg', descricao: 'Descrição da imagem 2' },
        { nome: 'imagem11.jpg', caminho: './images/Enchanted Explore 22.jpg', descricao: 'Descrição da imagem 2' },
        { nome: 'imagem12.jpg', caminho: './images/Enchanted Explore 23.jpg', descricao: 'Descrição da imagem 2' },
        { nome: 'imagem13.jpg', caminho: './images/Enchanted Explore 25.png', descricao: 'Descrição da imagem 2' },
        { nome: 'imagem14.jpg', caminho: './images/Enchanted Explore 26.jpg', descricao: 'Descrição da imagem 2' },
        // ...
      ];   

    return (
        <div className={`${styles.images}`}>
            <ul>
                {imagens.map(imagem => (
                    <li key={imagem.nome}>
                        <p>{imagem.nome}</p>
                        <img className={styles.imageFilter} src={`${imagem.caminho}`} alt={imagem.nome} />
                        <button className={styles.favorite}></button>
                        <button className={styles.share}></button>
                        <button className={styles.download}></button>
                    </li>
                ))}
            </ul>
        </div>
    )
}   

export default Main