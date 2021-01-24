import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Character = props => {
	const [info, setInfo] = useState(null);

	useEffect(() => {
		fetch(props.url)
			.then(resp => resp.json())
			.then(data => {
				setInfo(data.result.properties);
			});
	}, []);
	//var heartStarted = false;
	//const [clicked, setClicked] = useState();
	// heartOnClick = event => {
	// 	//cambiar true o false clicked <-- not working now
	// 	heartStarted = !heartStarted;
	// 	setClicked(clicked);
	// };
	///onclick -->* {clicked ? "bi bi-heart-fill" : "bi bi-heart"} */

	return (
		<div>
			<Card.Img variant="top" src="http://placehold.it/400x200" />
			<Card.Body>
				<Card.Title>{info ? info.name : ""}</Card.Title>
				<Card.Text>
					<ul className="text-left p-0">
						<li className="list-unstyled">Gender : {info ? info.gender : ""}</li>
						<li className="list-unstyled">Hair color : {info ? info.hair_color : ""}</li>
						<li className="list-unstyled">Eye-Color : {info ? info.eye_color : ""}</li>
					</ul>
				</Card.Text>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-between bg-white border-0">
				<Button variant="outline-primary">Learn more!</Button>
				<Button variant="outline-warning">
					<i className="bi bi-heart" />
				</Button>
			</Card.Footer>
		</div>
	);
};

Character.propTypes = {
	url: PropTypes.string
};
