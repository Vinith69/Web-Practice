import React from "react";
import Nav from "./../Nav";
import "./AboutUs.css";
import Footer from "./../Footer";

function AboutUs() {
	const slideImages = ["deadpool.jpg", "p.jpg", "dp.png"];
	return (
		<div>
			<Nav />

			<section className="aboutUs-section">
				<div className="image">
					<img src={`/images/${slideImages[2]}`} alt="fuck" />
				</div>
				<div className="aboutUs-info">
					<p>
						Our trust Samskruthi Vishwa Prathistana Udupi was
						founded on 16th September 2019. The very purpose behind
						building this organisation is Vishwanth Shenoy. He is a
						pure devotee of art and culture. Entire his life he has
						spent most of his time and hard-earned money on
						encouragement and in support of art and culture. Which
						is merely noticed by the public. His enthusiasm,
						dedication, love towards art and culture has motivated
						to take us to weave this organisation. With his
						guidance, inspiration and will, there are many cultural
						and social activities which are conducted in our
						organisation.
					</p>
					<p>
						{" "}
						Our organisation focuses majorly on organising the
						cultural activities, as our institution is situated in
						culturally rich temple city Udupi. The influence of the
						city’s cultural richness, we proudly present our
						organisation “Samskruti Vishwa Prathistana (R) Udupi”,
						which was inaugurated by Padmashri Dr. Salumarada
						Timmakka.
					</p>
					<h3>
						<strong>Cultural and Social perspectives:</strong>
					</h3>
					<ul>
						<li> Focuses on different forms of art and culture.</li>
						<li>
							Creating platform for interested artists and public
							to participate and grow along with us.
						</li>
						<li>
							Performances, productions and various types of
							cultural activities.
						</li>
						<li>
							Recognising the achievers, senior artists and giving
							them to exhibit and educate us their excellences.
						</li>
						<li>
							Encouraging the young talents artists to come
							forward and take part in our activities.
						</li>
						<li>Motivating future generation.</li>
						<li>Documenting old and useful art and culture.</li>
						<li>Involving in social activities</li>
						<li>Creating viewers.</li>
						<li>Social awareness and commitment.</li>
					</ul>
					<h3>
						<strong>Objectives:</strong>
					</h3>
					<ul>
						<li>
							To impart, promote and spread education in art,
							literature, science, commerce, ancient sciences,
							philosophies and culture of the land.
						</li>
						<li>Preserve and protect nature and environment.</li>
						<li>
							Short films, theatrical productions, workshops,
							lectures seminars, Completion, conference.
						</li>
						<li>Programs and performances.</li>
						<li>
							Cinema, audio-visual programs, artistic
							performances, cultural activities
						</li>
						<li>Youth encouragement programs.</li>
					</ul>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default AboutUs;
