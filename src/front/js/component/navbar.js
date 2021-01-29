import React from "react";
import { FavouritesList } from "./favouriteslist";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="insidecontainer-nav">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 ">
						<img
							src="https://cdn.iconscout.com/icon/free/png-256/starwars-5-555964.png"
							className="img-responsive logo"
						/>
					</span>
				</Link>
				<div className="favresume ml-auto">
					<FavouritesList />
				</div>
			</div>
		</nav>
	);
};
