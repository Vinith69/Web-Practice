import React, { useState, useEffect } from "react";
import Nav from "./../Nav";
import "../../App.css";
import Axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

import logo from "../../logo1.png";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import useWindowDimensions from "./../useWindowDimensions";

function Home() {
	const slideImages = ["deadpool.jpg", "p.jpg", "dp.png"];
	const [api, setApi] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const url = `http://localhost:5000/homeProgramImage`;
			await Axios.get(url).then(response => {
				console.log(response);
				setApi(response.data);
			});
		};
		fetchData();

		AOS.init({ duration: 2000 });
	}, []);

	return (
		<div className="Home">
			<Nav />
			{/* <h1>Home Component</h1> */}
			<div className="image-slider">
				{/* <img src={`/images/${slideImages[0]}`} alt="fuck" /> */}
				{/* <img src={`/images/${slideImages[2]}`} alt="fuck" /> */}
				{/* <img
					src="https://svpudupi.org/wp-content/uploads/2020/09/slide3.jpg"
					alt=""
				/> */}
				<h1 data-aos="fade-up">
					Kalajagatthu <span>Creations</span>
				</h1>
				{/* <img src="/images/front.jpg" alt="" /> */}

				<AliceCarousel
					disableButtonsControls={true}
					autoHeight
					autoPlay
					autoPlayInterval="2000"
					infinite={true}
					className="carousel"
				>
					<img
						className="slidermig"
						alt=""
						src="https://cdn.shopify.com/s/files/1/1969/3881/products/8_Dancers_Who_Shaped_Indian_Classical_Dance_As_We_Know_It_Today_7ef605fc8dba5425d6965fbd4c8fbe1f_1024x1024.jpg?v=1510119583"
					/>
					<img
						src="https://svpudupi.org/wp-content/uploads/2020/09/slide3.jpg"
						className="sliderimg"
						alt=""
					/>
					<img
						src="http://svpudupi.org/wp-content/uploads/2020/09/slide1.jpg"
						className="sliderimg"
						alt=""
					/>
					<img
						src="http://svpudupi.org/wp-content/uploads/2020/09/slide4.jpg"
						className="sliderimg"
						alt=""
					/>
					<img
						src="http://svpudupi.org/wp-content/uploads/2020/09/slide5.jpg"
						className="sliderimg"
						alt=""
					/>
				</AliceCarousel>

				{/* <img src="https://cdn.shopify.com/s/files/1/1969/3881/products/8_Dancers_Who_Shaped_Indian_Classical_Dance_As_We_Know_It_Today_7ef605fc8dba5425d6965fbd4c8fbe1f_1024x1024.jpg?v=1510119583" /> */}
			</div>
			<section className="about-section">
				<div
					className="about"
					data-aos="fade-right"
					data-aos-easing="ease-in-out"
					data-aos-offset="200"
				>
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
				<img
					src={logo}
					className="about-logo"
					data-aos="fade-bottom"
					// data-aos-easing="ease-in-out"
					data-aos-offset="200"
				/>
			</section>
			{/* Programs section */}
			<section className="programs-section">
				{/* <div className="programs"> */}
				<h2>
					<span>About </span>
					<span className="programs-title">Programs</span>
				</h2>
				<div className="image-section">
					{api.map(file => (
						<NavLink to={`/programs/${file.id}`} key={file.id}>
							<div
								className="image-container"
								data-aos="fade-right"
								data-aos-easing="ease-in-out"
								data-aos-offset="00"
								// data-aos-delay="1000"
								// data-aos-duration="3000"
							>
								<img
									src={`/image-page/${file.image}`}
									// width="420"
									// height="350"
									width="400"
									height="auto"
									alt="heludilla"
								/>
								<h5>{file.title}</h5>
								<p>
									{file.description.substring(0, 500)}
									......
								</p>
								<span>{file.date}</span>
							</div>
						</NavLink>
					))}
				</div>
				{/* </div> */}
			</section>
			<Footer />
		</div>
	);
}

export default Home;
