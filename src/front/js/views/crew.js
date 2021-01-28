import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Character } from "../component/character";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
export const Crew = () => {
	const { store, actions } = useContext(Context);

	const listItems = store.characters.map((c, index) => (
		<Card className="individualcard text-left align-items-center flex-shrink-0 mr-3" key={index}>
			<Character uid={c.uid} name={c.name} />
		</Card>
	));

	return (
		<div className="text-center mt-5">
			<div className="container">
				<div className="scrolling-wrapper d-flex justify-content-between row flex-row flex-nowrap">
					{listItems}
				</div>
			</div>
		</div>
	);
};
