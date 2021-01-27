import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { Button } from "react-bootstrap";

export const FavoritesList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.favorites.map((item, index) => {
					return (
						<li key={index} className="list-group-item d-flex justify-content-between">
							<Link to={"/single/" + index}>
								<span>{item}</span>
							</Link>
							<Button
								className="btn btn-success"
								onClick={() => actions.deleteFavs(info.properties.name)}>
								<i className="bi bi-trash" />
							</Button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
