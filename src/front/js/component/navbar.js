import React from "react";
import FavouritesList from "./favouriteslist";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5">
					<img
						src="https://cdn.iconscout.com/icon/free/png-256/starwars-5-555964.png"
						className="img-responsive logo"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary mx-5">
						Favourites <span className="badge badge-secondary badge-pill">5</span>
					</button>
				</Link>
			</div>
		</nav>
	);
};
