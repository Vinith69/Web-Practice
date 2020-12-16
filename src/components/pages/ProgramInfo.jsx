import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Nav from "./../Nav";
import Footer from "./../Footer";
import Axios from "axios";
import "./ProgramInfo.css";

function ProgramInfo() {
	const { image } = useParams();
	const [api, setApi] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const url = `http://localhost:5000/specificImage`;
			await Axios.get(url, { params: { id: image } }).then(response => {
				// console.log(response.data);
				// console.log(image);
				setApi(response.data);
			});
			setIsLoading(false);
		};
		fetchData();
	}, []);
	return (
		<div>
			<Nav color="add" />
			{!isLoading && !api.length && <Redirect to="/" />}
			<div className="image-program">
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
			<Footer color="normal" />
		</div>
	);
}

export default ProgramInfo;
