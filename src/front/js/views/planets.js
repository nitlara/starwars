import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Planet } from "../component/planet";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	const listItemsPlanets = store.planets.map((c, index) => (
		<Card className="individualcard text-left align-items-center flex-shrink-0 mr-3 my-1" key={index}>
			<Planet uid={c.uid} name={c.name} />
		</Card>
	));

	return (
		<div className="text-center mt-3">
			<div className="container">
				<div className="scrolling-wrapper d-flex justify-content-between row flex-row flex-nowrap">
					{listItemsPlanets}{" "}
					<Button variant="outline-primary" onClick={() => actions.getPlanetsMore()}>
						More planets
					</Button>
				</div>
			</div>
		</div>
	);
};
