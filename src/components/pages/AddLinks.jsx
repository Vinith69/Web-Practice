import React, { useState, useEffect } from "react";
import "./AddLinks.css";
import Axios from "axios";

function AddLinks() {
	const [link, setLink] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [isDisabled, setIsDisabled] = useState(true);
	const [message, setMessage] = useState("Enter EveryThing Correctly");

	const handleSubmit = async () => {
		setIsDisabled(true);
		// const url = "http://localhost:5000/addLinks";
		const url = "https://heludilla.000webhostapp.com/backend/addLinks.php";

		await Axios.post(url, {
			link: link,
			title: title,
			description: description,
		}).then(response => {
			console.log(response);
			if (response.data.affectedRows === 1)
				setMessage("Inserted sucessfully");
			else setMessage(" Something went wrong try again");
		});
		setTimeout(() => {
			setIsDisabled(false);
		}, 20000);
	};

	useEffect(() => {
		if (link === "" || description === "" || title === "")
			setIsDisabled(true);
		else setIsDisabled(false);
	}, [link, title, description]);

	return (
		<div className="Admin">
			<h1>Status:{message}</h1>
			<input
				type="text"
				placeholder="Youtube Link"
				onChange={e => setLink(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Title"
				onChange={e => setTitle(e.target.value)}
			/>
			{/* <input type="text" placeholder="Description" /> */}
			<textarea
				placeholder="Description"
				onChange={e => setDescription(e.target.value)}
			/>
			<button type="submit" onClick={handleSubmit} disabled={isDisabled}>
				Submit
			</button>
		</div>
	);
}

export default AddLinks;
