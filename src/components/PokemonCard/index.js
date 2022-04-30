import Image from "next/image";

import {Modal} from "../Modal";
import React, {useEffect, useState} from "react";

export function PokemonCard({id, nome, todosTipos, tipoPrincipal, imagem, altura, peso, habilidades, estatisticas, letraMaiuscula, weakness}) {
	const [modal, setModal] = useState(false);

	return (
		<>
			<button className={`card-pokemon ${tipoPrincipal}`} onClick={() => setModal(true)}>
				<div className="image">
					<Image src={imagem} layout="fill" alt={nome} className="thumb-img" />
				</div>
				<div className="info">
					<div className="text">
						<span>{id && id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : `#${id}`}</span>
						<h3>{letraMaiuscula(nome)}</h3>
					</div>
					<div className="icon">
						<Image src={`/${tipoPrincipal}.svg`} alt={nome} width={16} height={16} />
					</div>
				</div>
			</button>

			{modal && <Modal onClose={() => setModal(false)} letraMaiuscula={letraMaiuscula} id={id} nome={nome} todosTipos={todosTipos} tipoPrincipal={tipoPrincipal} imagem={imagem} altura={altura} peso={peso} habilidades={habilidades} estatisticas={estatisticas} weakness={weakness} />}
		</>
	);
}
