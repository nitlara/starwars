import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ContextWrapper } from "../store/appContext.js";

import "../../styles/home.scss";
import { Crew } from "../views/crew";

export const Home = () => {
	//const [store, actions] = useContext(Context);

	return (
		<div className="text-center">
			<p>
				<Crew />
			</p>
			<div className="alert alert-info">{"Loading message from the backend..."}</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};
