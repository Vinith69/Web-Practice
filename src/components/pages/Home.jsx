import React, { useState, useEffect } from "react";
import Nav from "./../Nav";
import "../../App.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

import logo from "../../logo.jpg";
// import logo1 from "../images/p.jpg";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";

function Home() {
	const slideImages = ["deadpool.jpg", "p.jpg", "1606272411396_untitled.png"];

	return (
		<div className="Home">
			<Nav />
			{/* <h1>Home Component</h1> */}
			<div className="image-slider">
				{/* <img src={`/images/${slideImages[0]}`} alt="fuck" /> */}
				<img src={`/images/${slideImages[2]}`} alt="fuck" />
			</div>
			<section className="about-section">
				<div className="about">
					<h2>
						<span>About </span>
						<span className="about-title">
							Kalajagatthu Creations
						</span>
					</h2>
					<h4>Samskruti Vishwa Pratistana, Udupi</h4>
					<p>
						Our trust Samskruthi Vishwa Prathistana Udupi was
						founded on 16th September 2019. The very purpose behind
						building this organisation is Vishwanth Shenoy. He is a
						pure devotee of art and culture. Entire his life he has
						spent most of his time and hard-earned money on
						encouragement and in support of art and culture. Which
						is merely noticed by the public. His enthusiasm,
						dedication, love towards art and culture has motivated
						to take us to weave this organisation.
					</p>
					<NavLink to="/about">
						<h3>Read More</h3>
					</NavLink>
				</div>
				<img src={logo} className="about-logo" />
			</section>
			{/* Programs section */}
			{/* <section className="programs-section">
				<div className="about">
					<h2>
						<span>About </span>
						<span className="about-title">Programs</span>
					</h2>
				</div>
			</section> */}
			<Footer />
		</div>
	);
}

export default Home;
