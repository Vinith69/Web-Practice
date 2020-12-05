import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Nav from "./../Nav";
import Axios from "axios";

function VideoPlayer() {
	const [api, setApi] = useState([]);
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
		const fetchData = () => {
			const url = `http://localhost:5000/addLinks`;
			Axios.get(url).then(response => {
				console.log(response);
				setApi(response.data);
			});
		};
		fetchData();
	}, []);

	return (
		<>
			<Nav />
			<div className="video">
				{api.map(link => (
					<React.Fragment key={link.link}>
						<ReactPlayer
							className="video-player"
							width={420}
							height={320}
							url={link.link}
							controls={true}
						/>
						<h5>{link.title}</h5>
						<p>{link.description}</p>
					</React.Fragment>
				))}
			</div>
		</>
	);
}

export default VideoPlayer;
