import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { SingleJumbo } from "../component/singlecomponent";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// export const Single = props => {
// 	const { store, actions } = useContext(Context);
// 	return (
// 		<div className="jumbotron">
// 			<h1 className="display-4">This will show the demo element: {store.demo[props.match.params.theid].title}</h1>

// 			<hr className="my-4" />

// 			<Link to="/">
// 				<span className="btn btn-primary btn-lg" href="#" role="button">
// 					Back home
// 				</span>
// 			</Link>
// 		</div>
// 	);
// };

// Single.propTypes = {
// 	match: PropTypes.object
// };

//ALVARO: CODIGO QUE HE USADO PARA RECIBIR LOS PERSONAJES

export const Single = () => {
	const [single, setSingle] = useState([]);

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/`) //¿Un unico fetch para recojer de una vez toda la info por "uid" o con ${props.uid}?
			.then(resp => resp.json())
			.then(data => {
				setSingle(data.results);
			});
	}, []);

	const listItems = single.map((c, index) => <SingleJumbo key={index} url={c.url} />);

	return <div className="text-center mt-5">{listItems}</div>;
};
Single.propTypes = {
	uid: PropTypes.string
};
