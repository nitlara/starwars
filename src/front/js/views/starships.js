import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Starship } from "../component/starship";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export const Starships = () => {
	const { store, actions } = useContext(Context);

	const listItemsStar = store.starships.map((c, index) => (
		<Card className="individualcard text-left align-items-center flex-shrink-0 mr-3 my-1" key={index}>
			<Starship uid={c.uid} name={c.name} />
		</Card>
	));

	return (
		<div className="text-center mt-3">
			<div className="container">
				<div className="scrolling-wrapper d-flex justify-content-between row flex-row flex-nowrap">
					{listItemsStar}{" "}
					<Button variant="outline-primary" onClick={() => actions.getStarshipsMore()}>
						More starships
					</Button>
				</div>
			</div>
		</div>
	);
};
