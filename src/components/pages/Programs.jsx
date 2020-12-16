import React, { useEffect, useState } from "react";
import Nav from "./../Nav";
import Footer from "./../Footer";
import Axios from "axios";
import { NavLink } from "react-router-dom";

function Programs() {
	// const api = [
	// 	"dp.png",
	// 	"p.jpg",
	// 	"deadpool.jpg",
	// 	"dp.png",
	// 	"dp.png",
	// 	"p.jpg",
	// 	"deadpool.jpg",
	// ];
	const [api, setApi] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			const url = `http://localhost:5000/addImage`;
			Axios.get(url).then(response => {
				// console.log(response);
				setApi(response.data);
			});
		};
		fetchData();
	}, []);

	return (
		<div className="programs">
			<Nav color="add" />
			<div className="prgm-title">
				<h1>Programs</h1>
			</div>

			<div className="image">
				{api.map(file => (
					<NavLink to={`/programs/${file.id}`} key={file.id}>
						<div className="image-container">
							<img
								src={`/image-page/${file.image}`}
								width="420"
								height="auto"
								alt="heludilla"
							/>
							{/* Extra div */}
							<div>
								<h5>{file.title}</h5>
								<p>
									{/* Some Paragraph about something and Heludilla
							Heludilla because i heludilla. Some Paragraph about
							something and Heludilla Heludilla because i
							heludilla Some Paragraph about something and
							Heludilla Heludilla because i heludilla */}
									{file.description.substring(0, 70)}......
								</p>
								<span>{file.date}</span>
							</div>
						</div>
					</NavLink>
				))}
			</div>
			<Footer color="normal" />
		</div>
	);
}

export default Programs;
