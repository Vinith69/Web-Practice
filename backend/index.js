const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "kalajagattu_creations",
});

const PORT = process.env.PORT || 5000;

// Video post
app.post("/addLinks", (req, res) => {
	const { link, title, description } = req.body;
	console.log(link);
	connection.query(
		`Insert into video (link,title,description) values(?,?,?)`,
		[link, title, description],
		(errors, results) => {
			try {
				if (!req.body) return errors;

				res.send(results);
			} catch (errors) {
				res.send(errors);
			}
		}
	);
});

// Video get
app.get("/addLinks", (req, res) => {
	connection.query(`select * from video`, (errors, results) => {
		if (!req.body) return errors;
		console.log(results);
		res.send(results);
	});
});

app.listen(PORT, () => console.log("Hello bitch running on 5000 "));
