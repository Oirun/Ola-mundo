import MenuLink from '../MenuLink';
import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <header className={styles.head}>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/principal">
                    Principal
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}