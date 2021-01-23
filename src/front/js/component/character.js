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

	return (
		<div>
			<Card.Img variant="top" src="https://lorempixel.com/400/200" />
			<Card.Body>
				<Card.Title>Name : {info ? info.name : ""}</Card.Title>
				<Card.Text>
					<ul>
						<li>Gender : {info ? info.gender : ""}</li>
						<li>Hair color : {info ? info.hair_color : ""}</li>
					</ul>
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button variant="outline-primary">Primary</Button> <Button variant="outline-warning">L</Button>{" "}
			</Card.Footer>
		</div>
	);
};

Character.propTypes = {
	url: PropTypes.string
};
