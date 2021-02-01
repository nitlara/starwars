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
			<h1 className="titletext my-2">Characters</h1>
			<div className="container-fluid">
				<Crew />
			</div>
			<h1 className="titletext my-2">Planets</h1>
			<Planets />
			<h1 className="titletext my-2">Starships</h1>
			<Starships />
		</div>
	);
};
