import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./../Nav";
import Footer from "./../Footer";
import Axios from "axios";
import "./ProgramInfo.css";

function ProgramInfo() {
	const { image } = useParams();
	const [api, setApi] = useState([]);
	useEffect(() => {
		const fetchData = () => {
			const url = `http://localhost:5000/specificImage`;
			Axios.get(url, { params: { id: image } }).then(response => {
				console.log(response);
				console.log(image);
				setApi(response.data);
			});
		};
		fetchData();
	}, []);
	return (
		<div>
			<Nav />
			{/* <h1>Program info{image}</h1> */}
			<div className="image">
				<div>
					{api.map(file => (
						<React.Fragment key={file.id}>
							<img
								src={`/image-page/${file.image}`}
								width="420"
								height="350"
								alt="heludilla"
							/>
							<h5>{file.title}</h5>
							<p>{file.description}</p>
							<span>{file.date}</span>
						</React.Fragment>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ProgramInfo;
