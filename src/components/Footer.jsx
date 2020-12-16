import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer({ color }) {
	return (
		<footer className={`footer ${color && "normal"}`}>
			<section>
				<div className="contact-section">
					<h2>
						<span>Quick </span>
						<span className="light">Links</span>
					</h2>
					<div>
						<NavLink to="/donation">Donation</NavLink>
						<NavLink to="/videos">Videos</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/programs">Programs</NavLink>
					</div>
				</div>
				<div className="contact-section">
					<h2 className="contact-title">
						<span>Contact </span>
						<span className="light">Us</span>
					</h2>
					<div className="contact-details">
						<p>Kalajagatthu Creations</p>
						<p>
							Address: Swarta tirtha, 1st floor, Badagupete, Udupi{" "}
						</p>
						<p>Tel: 7777777777, 9999999999</p>
						<p>Email: dinchakPooja@gmail.com</p>
					</div>
				</div>
				<div className="sociallMedia contact-section">
					<h2>
						<span>Social </span>
						<span className="light">Media</span>
					</h2>
					<div>
						<a
							target="Hello"
							href="https://www.instagram.com/vinith_nayak/"
						>
							<i class="fab fa-youtube"> Youtube</i>
						</a>
						<a href="" target="heludilla">
							<i class="fab fa-instagram"> Instagram</i>
						</a>
						<a href="" target="heludilla">
							<i class="fab fa-facebook-f"> Facebook</i>
						</a>
						<a href="" target="heludilla">
							<i class="fab fa-twitter"> Twitter</i>
						</a>
					</div>
				</div>
			</section>
			<div className="rights">
				<p>©2020 Kalajagatthu Creations. All Rights Reserved.</p>
				<p className="my-link">
					Designed By <span>Vineeth P Nayak</span>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
