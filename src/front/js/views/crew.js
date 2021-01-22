import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Character } from "../component/character";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Crew = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/")
			.then(resp => resp.json())
			.then(data => {
				debugger;

				setCharacters(data.results);
			});
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>

			<ul>
				{characters.map((c, index) => {
					return <Character key={index} data={c} />;
				})}
			</ul>
		</div>
	);
};
