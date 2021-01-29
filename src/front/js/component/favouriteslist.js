import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { Button, Dropdown } from "react-bootstrap";

//FUNCION PARA DESPLEGAR LA LISTA DE FAVORITOS CON CONTEXT
export const FavouritesList = () => {
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
				Favorites <span className="badge badge-danger rounded-circle">{allFavs.length}</span>
			</Dropdown.Toggle>

			<Dropdown.Menu>{allFavs}</Dropdown.Menu>
		</Dropdown>
	);
};
