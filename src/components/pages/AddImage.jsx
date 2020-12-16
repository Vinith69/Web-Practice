import React, { useState, useEffect } from "react";
import "./AddImage.css";
import Axios from "axios";

function AddImage() {
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");
	const [isDisabled, setIsDisabled] = useState(true);
	const [message, setMessage] = useState("Enter EveryThing Correctly");

	const handleSubmit = async e => {
		e.preventDefault();
		e.stopPropagation();
		// console.log(e);
		setIsDisabled(true);
		const url = "http://localhost:5000/addImage";
		let formdata = new FormData();

		formdata.append("myFile", image);
		formdata.append("title", title);
		formdata.append("description", description);
		formdata.append("date", date);

		// console.log(formdata);
		await Axios.post(
			url,
			// {
			// 	myFile: formdata,
			// 	title: title,
			// 	description: description,
			// 	date: date,
			// },
			formdata,
			{
				headers: {
					// accept: "application/json",
					// "Accept-Language": "en-US,en;q=0.8",
					"Content-Type": `multipart/form-data; `,
				},
			}
		).then(response => {
			// console.log(response);
			if (response.data.affectedRows === 1)
				setMessage("Inserted sucessfully");
			else setMessage(" Something went wrong try again");
		});
		setTimeout(() => {
			setIsDisabled(false);
		}, 20000);
	};

	useEffect(() => {
		if (date === "" || description === "" || title === "")
			setIsDisabled(true);
		else if (description.length > 2000) {
			setIsDisabled(true);
			setMessage(
				"Description has " +
					description.length +
					" characters, it must be less than 2000 characters "
			);
		} else {
			setIsDisabled(false);
			setMessage("Ready to insert");
		}
	}, [date, title, description]);

	return (
		<div className="addImage">
			<h1>{message}</h1>
			<input
				type="text"
				placeholder="title"
				onChange={e => setTitle(e.target.value)}
			/>
			<input
				type="file"
				name="myFile"
				accept="image/*"
				onChange={e => {
					setImage(e.target.files[0]);
					console.log(image);
				}}
			/>
			<textarea
				type="text"
				placeholder="description"
				className="description"
				onChange={e => setDescription(e.target.value)}
			/>
			<input
				type="text"
				placeholder="date DD/MM/YYY"
				onChange={e => setDate(e.target.value)}
			/>
			<button type="submit" onClick={handleSubmit} disabled={isDisabled}>
				Submit
			</button>
		</div>
	);
}

export default AddImage;
