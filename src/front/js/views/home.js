import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ContextWrapper } from "../store/appContext.js";

import "../../styles/home.scss";
import { Crew } from "../views/crew";
import { Planets } from "../views/planets";
import { Starships } from "../views/starships";

export const Home = () => {
	//const [store, actions] = useContext(Context);

	return (
		<div className="text-left text-danger">
			<h1 className="titletext">Characters</h1>
			<Crew />
			<h1 className="titletext">Planets</h1>
			<Planets />
			<h1 className="titletext">Starships</h1>
			<Starships />
		</div>
	);
};
