import styles from "./styles.module.scss";
import Image from "next/image";
import codeBoost from "../../../public/codeboost.svg";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.cont}`}>
				<div className={styles.text}>
					<h3>Módulo JavaScript</h3>
					<p>Consumindo e exibindo dados de uma API</p>
				</div>
				<Image src={codeBoost} alt="Logo Pokemón" />
			</div>
		</footer>
	);
}
