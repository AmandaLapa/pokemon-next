import Busca from "../../../public/icon-search.svg";
import Image from "next/image";
import React, {useState} from "react";

export function InputBusca({onChange, searchTerm}) {
	function handleClick(event) {
		onChange(event.target.value);
	}
	return (
		<>
			<div className="search">
				<input type="text" onChange={handleClick} placeholder="Search name or code" />
				<button onClick={searchTerm}>
					<Image src={Busca} alt="busca" />
				</button>
			</div>
		</>
	);
}
