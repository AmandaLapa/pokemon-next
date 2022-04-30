import Image from "next/image";
import Fechar from "../../../public/close.svg";

export function Modal({id, nome, imagem, todosTipos, tipoPrincipal, altura, peso, habilidades, weakness, estatisticas, letraMaiuscula, onClose = () => {}}) {
	return (
		<div className="modal" type-pokemon-modal={`${tipoPrincipal}`} id="js-modal-details">
			<div className="overlay"></div>
			<div className="box">
				<button className="close js-close-modal-details-pokemon" onClick={onClose}>
					<Image src={Fechar} alt="fechar" />
				</button>

				<div className="left-container">
					<div className="icon">
						<Image src={`/${tipoPrincipal}.svg`} alt={tipoPrincipal} width={16} height={16} />
					</div>
					<div className="image">
						<Image src={imagem} layout="fill" alt={nome} className="thumb-img" />
					</div>
				</div>

				<div className="right-container">
					<div className="name">
						<h2 id="js-name-pokemon-modal">{letraMaiuscula(nome)}</h2>
						<span id="js-code-pokemon-modal">{id && id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : `#${id}`}</span>
					</div>
					<ul className="type">
						{todosTipos.map((tipo) => (
							<li key={tipo.type.name}>
								<span className={`tag-type ${tipo.type.name}`}>{letraMaiuscula(tipo.type.name)}</span>
							</li>
						))}
					</ul>
					<ul className="info">
						<li>
							<span>Height</span>
							<strong>{altura / 10}m</strong>
						</li>
						<li>
							<span>Weight</span>
							<strong>{peso / 10}KG</strong>
						</li>
						<li>
							<span>Abilities</span>
							<ul className="habili">
								{habilidades.map((habilidade, id) => (
									<li key={id} className={tipoPrincipal}>
										{letraMaiuscula(habilidade.ability.name)}
									</li>
								))}
							</ul>
						</li>
					</ul>
					<div className="weak">
						<h4>Weaknesses</h4>
						<ul id="js-area-weak">
							{/* 
							{weakness.double_damage_from.map((fraqueza) => (
								<li key={fraqueza.name} className={`tag ${fraqueza.name}`}>
									{fraqueza.name}
								</li>
							))} */}
							<li>
								<span className="tag-type water">Water</span>
							</li>
						</ul>
					</div>
					<div className="stats">
						<h5>Stats</h5>
						<div className="all">
							{estatisticas.map((estatistica, index) => (
								<div className="item" key={index}>
									<span>{letraMaiuscula(estatistica.stat.name.includes("special-") ? estatistica.stat.name.replace("special-", "sp.") : estatistica.stat.name)}</span>

									<div className="bar-status">
										<div className="bar" id="js-stats-hp" style={{width: `${estatistica.base_stat}%`, maxWidth: `100%`}}></div>

										<ul className="separator">
											<li></li>
											<li></li>
											<li></li>
											<li></li>
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
