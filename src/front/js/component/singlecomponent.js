import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/_colors.scss";
import { Jumbotron, Col, Container, Row, Image, Button } from "react-bootstrap";

export const SingleJumbo = props => {
	const [one, setOne] = useState();

	const { id } = useParams();

	useEffect(
		() => {
			fetch(`https://www.swapi.tech/api/people/${id}`)
				.then(resp => resp.json())
				.then(data => {
					setOne(data.result);
					console.log(data.result);
				});
		},
		[id]
	);

	return (
		<Jumbotron className="mx-5">
			<Container>
				<Row className="mb-4">
					<Col>
						<Image src="https://i.blogs.es/69fdcc/star-wars-saga/1366_2000.jpg" thumbnail />
					</Col>
					<Col>
						<h1>{one ? one.properties.name : ""}</h1>
						<p className="description">{one ? one.description : ""}</p>
					</Col>
				</Row>
			</Container>
			<Container className="container-data-description">
				<Row className="border-top border-danger pt-4">
					<Col className="col-2">
						<p>Name</p>
						<p>{one ? one.properties.name : ""}</p>
					</Col>
					<Col className="col-2">
						<p>Birth Year</p>
						<p>{one ? one.properties.birth_year : ""}</p>
					</Col>
					<Col className="col-2">
						<p>Gender</p>
						<p>{one ? one.properties.gender : ""}</p>
					</Col>
					<Col className="col-2">
						<p>Height</p>
						<p>{one ? one.properties.height : ""}</p>
					</Col>
					<Col className="col-2">
						<p>Skin color</p>
						<p>{one ? one.properties.skin_color : ""}</p>
					</Col>
					<Col className="col-2">
						<p>Eye color</p>
						<p>{one ? one.properties.eye_color : ""}</p>
					</Col>
				</Row>
			</Container>
			<div className="d-flex justify-content-start align-item-end">
				<Link to="/">
					<Button className="btn btn-dark">Back home</Button>
				</Link>
			</div>
		</Jumbotron>
	);
};

SingleJumbo.propTypes = {
	url: PropTypes.string,
	uid: PropTypes.string
};
