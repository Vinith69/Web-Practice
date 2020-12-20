import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Nav from "../Nav";
import Footer from "../Footer";
import Axios from "axios";
import useWindowDimensions from "../useWindowDimensions";
import ReactLoading from "react-loading";

function VideoPlayer() {
	const [api, setApi] = useState([]);
	const [playerWidth, setPlayerWidth] = useState(420);
	const [playerHeight, setPlayerHeight] = useState(320);
	const { height, width } = useWindowDimensions();
	const [isLoading, setIsLoading] = useState(true);
	// const api = [
	// 	{
	// 		url: "https://www.youtube.com/watch?v=I2UBjN5ER4s",
	// 		name: "Hello bitch",
	// 	},
	// 	{
	// 		url: "https://www.youtube.com/watch?v=lVJLNsLNnWs",
	// 		name: "Hello bitch 1",
	// 	},
	// 	{
	// 		url: "https://www.youtube.com/watch?v=KgXT63wPMPc",
	// 		name: "Hello bitch 2",
	// 	},
	// ];
	// console.log(api.map((l)));
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			// const url = `http://localhost:5000/addLinks`;
			// const url = `http://localhost/phpKc/addLinks.php`;
			const url =
				"https://heludilla.000webhostapp.com/backend/addLinks.php";

			await Axios.get(url).then(response => {
				console.log(response);
				setApi(response.data);
			});
			setTimeout(() => {
				setIsLoading(false);
			}, 1500);
		};
		fetchData();

		if (width > 500) {
			setPlayerWidth(420);
			setPlayerHeight(320);
		} else {
			setPlayerWidth(320);
			setPlayerHeight(220);
		}
	}, [width]);

	return (
		<>
			<Nav color="add" />
			{isLoading ? (
				<div className="isLoading">
					<ReactLoading type="bars" color="black" />
				</div>
			) : (
				<>
					<div
						className="designs"
						style={{
							backgroundPosition: "4rem 1rem",
							padding: "2rem",
						}}
					></div>
					<div className="video-title">
						<h1>Videos</h1>
					</div>
					<div className="video">
						{/* {console.log("api", api)} */}
						{api.map(link => (
							<div key={link.link} className="video-container">
								<ReactPlayer
									className="video-player"
									// width={420}
									// height={320}
									width={playerWidth}
									height={playerHeight}
									url={link.link}
									controls={true}
								/>

								<h5>{link.title}</h5>
								<p>{link.description}</p>
							</div>
						))}
					</div>
					<div
						className="designs"
						style={{
							backgroundPosition: "4rem 1rem",
							padding: "2rem",
						}}
					></div>
				</>
			)}
			<Footer color="normal" />
		</>
	);
}

export default VideoPlayer;

// {isLoading ? (
// 	<div className="isLoading">
// 		<ReactLoading type="bars" color="black" />
// 	</div>
// ) : (
// 	<div className="video">
// 		<div className="designs"></div>
// 		{console.log("api", api)}
// 		{api.map(link => (
// 			<div key={link.link} className="video-container">
// 				<ReactPlayer
// 					className="video-player"
// 					// width={420}
// 					// height={320}
// 					width={playerWidth}
// 					height={playerHeight}
// 					url={link.link}
// 					controls={true}
// 				/>
// 				<h5>{link.title}</h5>
// 				<p>{link.description}</p>
// 			</div>
// 		))}
// 	</div>
// )}
