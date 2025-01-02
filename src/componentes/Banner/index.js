import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.svg";
import minhaFoto from "assets/Programadora1.png";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}> Olá mundo </h1>

                <p>Boas vindas ao meu espaço pessoal! Eu sou Manuela Macena, instrutor de Front-end da Alura. 
                Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)</p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt="oi" aria-hidden={true} />
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto de programadora" />
            </div>

            {/* <div className={styles.divSecundaria}>
                <div className={styles.divInterna}>

                </div>
            </div> */}
        </div>
    )
}