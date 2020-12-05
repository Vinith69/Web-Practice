import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
	return (
		<div>
			<h1>
				Whoa looks like you're lost... Click on the link below to go to
				Home Page
			</h1>
			<NavLink to="/">Home</NavLink>
		</div>
	);
}

export default NotFound;
