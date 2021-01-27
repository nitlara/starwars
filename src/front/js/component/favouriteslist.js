import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { Button, Dropdown } from "react-bootstrap";


export const FavoritesList = () => {

	const { store, actions } = useContext(Context);

	const allFavs = store.favorites.map((item, index) => {
		return (
			<Dropdown.Item key={index} className="list-group-item d-flex justify-content-between">
				<span>{item}</span>
				<Button className="btn btn-success" onClick={() => actions.deleteFavs(item)}>
					<i className="bi bi-trash" />
				</Button>
			</Dropdown.Item>
		);
	});

	return (

		<Dropdown>
			<Dropdown.Toggle variant="success" id="dropdown-basic">
				Favorites
			</Dropdown.Toggle>

			<Dropdown.Menu>{allFavs}</Dropdown.Menu>
		</Dropdown>

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
