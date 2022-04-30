import Image from "next/image";
import Logo from "../../../public/logo.svg";
import styles from './styles.module.scss';

export function Header(){
 return(
  <header className={styles.header}>
   	<div className={`container ${styles.cont}`}>
				<Image src={Logo} alt="Logo Pokemón" />
				<span>Case Study  ->  Code<strong>Boost</strong></span>
			</div>
  </header>
 )
}