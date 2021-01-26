import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ToggleHeart } from "./heart";

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

	return (
		<div>
			<Card.Img
				variant="top"
				src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/400x400/public/media/image/2020/02/yoda-star-wars-1859043.jpg?itok=I6udHO_e"
			/>
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
				{clicked ? <Redirect to={`/single/${info.uid}`} /> : <></>}
				<Button variant="outline-primary" onClick={() => setClicked(true)}>
					{"Learn more!"}
				</Button>
				<ToggleHeart />
			</Card.Footer>
		</div>
	);
};

Character.propTypes = {
	url: PropTypes.string,
	uid: PropTypes.string
};
