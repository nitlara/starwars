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
			fetch(`https://www.swapi.tech/api/starships/${id}`)
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
						<p>Model</p>
						<p>{one ? one.properties.model : ""}</p>
					</Col>
					<Col className="col-2">
						<p>Class</p>
						<p>{one ? one.properties.starship_class : ""}</p>
					</Col>
					<Col className="col-2">
						<p>Manufacturer</p>
						<p>{one ? one.properties.manufacturer : ""}</p>
					</Col>
					<Col className="col-2">
						<p>Cost in credits</p>
						<p>{one ? one.properties.cost_in_credits : ""}</p>
					</Col>
					<Col className="col-2">
						<p>Max Speed</p>
						<p>{one ? one.properties.max_atmosphering_speed : ""}</p>
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
