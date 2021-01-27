import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ContextWrapper } from "../store/appContext.js";

import "../../styles/home.scss";
import { Crew } from "../views/crew";

export const Home = () => {
	//const [store, actions] = useContext(Context);

	return (
		<div className="text-left ml-5 text-danger">
			<h1 className="titletext">Characters</h1>
			<p>
				<Crew />
			</p>
			<h1 className="titletext">Planets</h1>
			<h1 className="titletext">Starships</h1>
		</div>
	);
};
