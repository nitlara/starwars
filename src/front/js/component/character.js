import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Character = props => {
	useEffect(() => {
		fetch(props.url, {
			mode: "no-cors"
		})
			.then(resp => resp.json())
			.then(data => {
				debugger;
				data;
			});
	}, []);

	return (
		<div>
			<ul>
				<li>Name : {""}</li>
				<li>Gender : {""} </li>
			</ul>
		</div>
	);
};

Character.propTypes = {
	url: PropTypes.string
};
