import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
//import { Demo } from "./views/demo";
import { Crew } from "./views/crew";
import { Planets } from "./views/planets";
import { Starships } from "./views/starships";
import { SingleCharacter } from "./views/singlechar";
import { SinglePlanets } from "./views/singleplanets";
import { SingleStarship } from "./views/singlestarships";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/singlecompcharacter/:id">
							<SingleCharacter />
						</Route>
						<Route exact path="/singlecompplanets/:id">
							<SinglePlanets />
						</Route>
						<Route exact path="/singlecompstarships/:id">
							<SingleStarship />
						</Route>
						<Route exact path="/crew">
							<Crew />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/starships">
							<Starships />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
