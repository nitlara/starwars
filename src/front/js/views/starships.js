import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Starship } from "../component/starship";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";
export const Starships = () => {
	const { store, actions } = useContext(Context);
	const listItemsStar = store.starships.map((c, index) => (
		<Card className="individualcard text-left align-items-center flex-shrink-0 mr-3 " key={index}>
			<Starship uid={c.uid} name={c.name} />
		</Card>
	));

	return (
		<div className="text-center mt-5">
			<div className="container">
				<div className="scrolling-wrapper d-flex justify-content-between row flex-row flex-nowrap">
					{listItemsStar}
				</div>
			</div>
		</div>
	);
};
