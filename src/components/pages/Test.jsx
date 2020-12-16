import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Test.css";

function Test() {
	return (
		<div>
			<h1>Testing</h1>
			<div className="test">
				<AliceCarousel
					disableButtonsControls={true}
					autoHeight
					autoPlay
					autoPlayInterval="2000"
					infinite={true}
				>
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
			</div>
		</div>
	);
}

export default Test;
