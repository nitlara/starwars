import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

export const ToggleHeart = () => {
	const [fill, setFill] = useState(false);
	const { store, actions } = useContext(Context);

	return (
		<div>
			{!fill && (
				<Button
					className="btn btn-warning"
					onClick={() => {
						setFill(!fill);
					}}>
					<i className="bi bi-heart" />
				</Button>
			)}
			{fill && (
				<Button
					className="btn btn-warning"
					onClick={() => {
						setFill(!fill), addFavs();
					}}>
					<i className="bi bi-heart-fill" />
				</Button>
			)}
		</div>
	);
};
