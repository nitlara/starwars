import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";

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
		<ul>
			<li>Name : {info ? info.name : ""}</li>
			<li>Gender : {info ? info.gender : ""}</li>
			<li>Hair color : {info ? info.hair_color : ""}</li>
		</ul>
	);
};

Character.propTypes = {
	url: PropTypes.string
};
