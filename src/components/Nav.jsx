import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./../App.css";
// import "./Nav.css";

function Nav({ color }) {
	const [isExpanded, setIsExpanded] = useState(true);
	const [scroll, setScroll] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		// console.log(offset);
		if (offset > 100) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, []);

	const handleToggle = () => {
		setIsExpanded(!isExpanded);
		// console.log("true", isExpanded);
	};

	return (
		<div className={`nav-bar ${scroll && "sticky"} ${color && color} `}>
			<NavLink to="/" activeClassName="" className="nav-logo">
				<h1>
					K <span>C</span>
				</h1>
			</NavLink>
			<nav className="nav">
				<i
					className="fa fa-bars"
					aria-hidden="true"
					onClick={e => handleToggle(e)}
				/>

				<ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
					<NavLink activeClassName="active" exact to="/">
						<li>Home</li>
					</NavLink>
					<NavLink activeClassName="active" to="/about">
						<li>About</li>
					</NavLink>
					<NavLink activeClassName="active" to="/videos">
						<li>Videos</li>
					</NavLink>
					<NavLink exact activeClassName="active" to="/programs">
						<li>Programs</li>
					</NavLink>
					<NavLink
						activeClassName="active notDisplay"
						className="notDisplay"
						to="/contact"
					>
						<li>Contact</li>
					</NavLink>
					{/* <NavLink activeClassName="active" to="/donation">
						<li>Donation</li>
					</NavLink> */}
				</ul>
			</nav>
			<NavLink
				activeClassName="active"
				className={`btn ${!isExpanded && "is-expanded"}`}
				to="/donation"
			>
				<li>Donation</li>
			</NavLink>
		</div>
	);
}

export default Nav;
