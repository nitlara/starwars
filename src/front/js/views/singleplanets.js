import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { SingleJumbo } from "../component/singlecompplanets";
import { setUrlStored } from "../component/character";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanets = () => {
	//const [store, actions] = useContext(Context);

	return (
		<div className="text-center mt-5">
			<SingleJumbo />
		</div>
	);
};
SinglePlanets.propTypes = {
	url: PropTypes.string
};
