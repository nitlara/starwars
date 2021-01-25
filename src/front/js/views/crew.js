import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Character } from "../component/character";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export const Crew = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/")
			.then(resp => resp.json())
			.then(data => {
				setCharacters(data.results);
			});
	}, []);

	const listItems = characters.map((c, index) => (
		<Card className="card col-3 text-left align-items-center" key={index}>
			<Character uid={c.uid} />
		</Card>
	));

	return (
		<div className="text-center mt-5">
			<div className="container">
				<div className="scrolling-wrapper row flex-row flex-nowrap ">{listItems}</div>
			</div>
		</div>
	);
};
