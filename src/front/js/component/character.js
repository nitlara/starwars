import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export const Character = props => {
	const [info, setInfo] = useState(null);
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/${props.uid}`)
			.then(resp => resp.json())
			.then(data => {
				setInfo(data.result);
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
				<Card.Title>{info ? info.properties.name : ""}</Card.Title>
				<Card.Text>
					<ul className="text-left p-0">
						<li className="list-unstyled">Gender : {info ? info.properties.gender : ""}</li>
						<li className="list-unstyled">Hair color : {info ? info.properties.hair_color : ""}</li>
						<li className="list-unstyled">Eye-Color : {info ? info.properties.eye_color : ""}</li>
					</ul>
				</Card.Text>
			</Card.Body>

			<Card.Footer className="d-flex justify-content-between bg-white border-0">
				{clicked ? <Redirect to={"/single"} /> : <></>}
				<Button variant="outline-primary" onClick={() => setClicked(true)}>
					{"Learn more!"}
				</Button>

				<Button variant="outline-warning">
					<i className="bi bi-heart" />
				</Button>
			</Card.Footer>
		</div>
	);
};

Character.propTypes = {
	url: PropTypes.string,
	uid: PropTypes.string
};
