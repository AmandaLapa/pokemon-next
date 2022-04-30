import styles from "./styles.module.scss";
import Image from "next/image";

import Busca from "../../../../public/icon-search.svg";
import All from "../../../../public/icon-all.svg";
import IconePokebola from "../../../../public/icon-pokeball.svg";

import React, {useEffect, useState} from "react";
import api from "../../../services/api";
import {PokemonCard} from "../../PokemonCard";

//listando todos os pokemons nativamente

/* export async function getStaticProps() {
	const maxPokemons = 251;
	const api = `https://pokeapi.co/api/v2/pokemon/`;
	const res = await fetch(`${api}/?limit=${maxPokemons}`);
	const data = await res.json();

	// add pokemon index
	data.results.forEach((item, index) => {
		item.id = index + 1;
	});

	return {
		props: {
			pokemons: data.results,
		},
	};
} */

export function SectionPokemons({pokemons}) {
	return (
		<>
		{/* 	<section className={styles.allPokemons}>
				<div className="container">
					<div className={styles.top}>
						<h2>Select your pokemon</h2>

						<div className="search">
							<input type="search" placeholder="Search name or code" id="js-input-search" />
							<button type="button" id="js-btn-search">
								<Image src={Busca} alt="busca" />
							</button>
						</div>
					</div>

					<div className={styles.all}>
						<ul className={styles.nav} id="js-type-area">
							<li>
								<button className="type-filter active all" code-type="">
									<div className={styles.icon}>
										<Image src={All} alt="all" />
									</div>
									<span>All</span>
								</button>
							</li>
						</ul>

						<div className={styles.content}>
							<div className={styles.info}>
								<Image src={IconePokebola} alt="all" />
								<span>
									<strong id="js-count-pokemons"> 50 </strong> Pokémons
								</span>
							</div>
							<div className={styles.selectCustom}></div>
							<div className={styles.allPoks} id="js-list-pokemons">
								{pokemons.map((pokemon) => (
									<div key={pokemon.id}>{pokemon.name} </div>
								))}
							</div>

							<button className="btn-load-more" id="js-btn-load-more">
								Load more Pokémons
							</button>
						</div>
					</div>
				</div>
			</section> */}
		</>
	);
}
