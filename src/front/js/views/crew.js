import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Character } from "../component/character";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Crew = () => {
	const { store, actions } = useContext(Context);

	const listItems = store.characters.map((c, index) => (
		<Card className="individualcard text-left align-items-center flex-shrink-0 mr-3 my-1" key={index}>
			<Character uid={c.uid} name={c.name} />
		</Card>
	));

	return (
		<div className="text-center mt-3">
			<div className="container">
				<div className="scrolling-wrapper d-flex justify-content-between row flex-row flex-nowrap containercards">
					{listItems}
					<Button variant="outline-primary" onClick={() => actions.getCharactersMore()}>
						More characters
					</Button>
				</div>
			</div>
		</div>
	);
};
