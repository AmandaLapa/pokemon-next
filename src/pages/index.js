import Head from "next/head";
import {SectionHero} from "../components/Home/SectionHero";
import {PokemonCard} from "../components/PokemonCard";
import {InputBusca} from "../components/InputBusca";

import {toast} from "react-toastify";
import React, {useEffect, useState} from "react";
import api from "../services/api";
import styles from "../styles/styles.module.scss";

import Image from "next/image";
import IconePokebola from "../../public/icon-pokeball.svg";
import All from "../../public/icon-all.svg";

export async function getStaticProps() {
	//listar todos os pokemons
	const resposta = await api.get("pokemon?offset=0&limit=9");
	const dataPokemons = resposta.data;
	//const pokemons = dataPokemons.results;

	//tipos de pokemon
	const respostaTipos = await api.get("type");

	return {
		props: {
			listaTipos: respostaTipos.data.results,
			pokeAll: dataPokemons,
		},
	};
}

export default function Home({listaTipos, pokeAll}) {
	const [todosTiposPokemons, setTodosTiposPokemons] = useState(true);
	const [tipoEspecificoPokemons, setTipoEspecificoPokemons] = useState(false);

	//para o filtro individual
	const [pokTipo, setPokTipo] = useState([]);
	const [tipoNome, setTipoNome] = useState("");
	const [allPokemons, setAllPokemons] = useState([]);
	const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

	const getAllPokemons = async () => {
		const respostaPokemons = await fetch(loadMore);
		const dataPokemons = await respostaPokemons.json();

		setLoadMore(dataPokemons.next);

		function createPokemonObject(results) {
			results.forEach(async (pokemon) => {
				const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
				const data = await resposta.json();
				setAllPokemons((pok) => [...pok, data]);
			});
		}
		createPokemonObject(dataPokemons.results);
	};

	useEffect(() => {
		getAllPokemons();
	}, []);

	function letraMaiuscula(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const handleApi = async (name) => {
		const respostaNome = await api.get(name);
		const dataNome = respostaNome.data;
		const tiposAllNome = await Promise.all(dataNome.pokemon.map(({pokemon}) => api.get(pokemon.url)));

		let lista = [];
		for (let i = 0; i < dataNome.pokemon.length; i++) {
			lista.push(tiposAllNome[i].data);
		}
		setTipoNome(name.replace("type/", ""));
		setPokTipo(lista);
	};

	useEffect(() => {
		//console.log(listaTipos);
		//console.log(pokemonDetalhes);
		//console.log(pokeAll); //count
		//console.log(allPokemons);
	}, [pokTipo]);

	return (
		<>
			<Head>
				<title>Pokemon | NextJS</title>
				<meta name="description" content="Projeto desenvolvido em nextjs" />
			</Head>

			<SectionHero />

			<section className={styles.allPokemons}>
				<div className="container">
					<div className={styles.top}>
						<h2>Select your pokemon</h2>
						{/* <InputBusca onChange={(search) => setText(search)} value={text} searchTerm={handleSearch} /> */}
					</div>

					<div className={styles.all}>
						<ul className={styles.nav} id="js-type-area">
							<li>
								<button
									className={todosTiposPokemons ? "type-filter active all" : "type-filter all"}
									onClick={() => {
										setTodosTiposPokemons(true), setTipoEspecificoPokemons(false);
									}}
								>
									<div className="icon">
										<Image src={All} alt="all" />
									</div>
									<span>All</span>
								</button>
							</li>

							{listaTipos
								.filter((tipo) => {
									if (tipo.name !== "unknown" && tipo.name !== "shadow") {
										return tipo;
									}
								})
								.map((tipo, index) => (
									<li key={index}>
										<button
											className={tipoNome == tipo.name ? `type-filter ${tipo.name} active` : `type-filter ${tipo.name}`}
											onClick={() => {
												setTodosTiposPokemons(false), setTipoEspecificoPokemons(true), handleApi(`type/${tipo.name}`);
											}}
										>
											<div className="icon">
												<Image src={`/${tipo.name}.svg`} alt={tipo.name} width={18} height={18} />
											</div>
											<span>{letraMaiuscula(tipo.name)}</span>
										</button>
									</li>
								))}
						</ul>

						<div className={styles.content}>
							<div className={styles.info}>
								<Image src={IconePokebola} alt="all" />
								<span>
									<strong id="js-count-pokemons">{todosTiposPokemons ? `${pokeAll.count} Pokémons` : tipoEspecificoPokemons ? `${pokTipo.length} Pokémons` : 0}</strong>
								</span>
							</div>
							<div className={styles.selectCustom}></div>

							{todosTiposPokemons && (
								<>
									<div className={styles.allPoks}>
										{allPokemons.map((pokemon, index) => (
											<PokemonCard letraMaiuscula={letraMaiuscula} key={index} id={pokemon.id} nome={pokemon.name} todosTipos={pokemon.types} tipoPrincipal={pokemon.types[0].type.name} imagem={pokemon.sprites.other.dream_world.front_default || sprites.front_default} altura={pokemon.height} peso={pokemon.weight} habilidades={pokemon.abilities} estatisticas={pokemon.stats} weakness={pokemon.types[0].type.url} />
										))}
									</div>

									<button id="js-btn-load-more" className="btn-load-more" onClick={() => getAllPokemons()}>
										Load more Pokémons
									</button>
								</>
							)}

							{tipoEspecificoPokemons && (
								<>
									<div className={styles.allPoks}>
										{pokTipo
											.filter((filtro) => {
												if (filtro.sprites.front_default !== null) return filtro;
											})
											.map(({id, name, types, sprites, height, weight, abilities, stats}) => (
												<PokemonCard letraMaiuscula={letraMaiuscula} key={name} id={id} nome={name} todosTipos={types} tipoPrincipal={types[0].type.name} imagem={sprites.other.dream_world.front_default || sprites.front_default} altura={height} peso={weight} habilidades={abilities} estatisticas={stats} />
											))}
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
