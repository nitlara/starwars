import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Character } from "../component/character";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";

export const Crew = () => {
	const { store, actions } = useContext(Context);

	const listItems = store.characters.map((c, index) => (
		<Card className="card col-3 text-left align-items-center" key={index}>
			<Character uid={c.uid} name={c.name} />
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
