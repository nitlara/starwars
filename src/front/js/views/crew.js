import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Character } from "../component/character";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Carousel from "react-bootstrap/Carousel";

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
			<Character url={c.url} />
		</Card>
	));

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<div className="container">
				<div className="scrolling-wrapper row flex-row flex-nowrap ">{listItems}</div>
			</div>
		</div>
	);
};
