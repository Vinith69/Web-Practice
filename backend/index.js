const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const multer = require("multer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		//   cb(null, 'uploads')
		cb(null, "../public/image-page");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "_" + file.originalname);
	},
});

const PORT = process.env.PORT || 5000;

// Video post
app.post("/addLinks", (req, res) => {
	const { link, title, description } = req.body;
	// console.log(link);
	connection.query(
		`Insert into video (link,title,description) values(?,?,?)`,
		[link, title, description],
		(errors, results) => {
			try {
				if (!req.body) return res.json(errors);
				if (Object.keys(req.body).length === 0)
					return res.json("Empty");
				res.send(results);
			} catch (errors) {
				res.send(errors);
			}
		}
	);
});

var upload = multer({ storage: storage });

// Video get
app.get("/addLinks", (req, res) => {
	connection.query(`select * from video`, (errors, results) => {
		if (!req.body) return errors;
		// console.log(results);
		res.send(results);
	});
});

// Image post
app.post("/addImage", upload.single("myFile"), (req, res) => {
	if (!req.body) return res.send("no file");
	// console.log(req.file);
	// console.log(req.body);
	const { title, description, date } = req.body;
	connection.query(
		`Insert into image (image,title,description,date) values(?,?,?,?)`,
		[req.file.filename, title, description, date],
		(error, results) => {
			try {
				if (!req.body) return res.send(errors);
				if (Object.keys(req.body).length === 0)
					return res.json("Empty");
				// console.log(results);
				res.send(results);
			} catch (errors) {
				res.send(errors);
			}
		}
	);
});

// Image get
app.get("/addImage", (req, res) => {
	connection.query(`select * from image`, (errors, results) => {
		if (!req.body) res.json("Error no body");
		res.send(results);
	});
});

app.get("/homeProgramImage", (req, res) => {
	connection.query(
		`select  * from image limit 3`,
		// `select  * from image order by id desc limit 3`,
		(errors, results) => {
			if (!req.body) res.json("Error no body");
			res.send(results);
		}
	);
});

app.get("/specificImage", (req, res) => {
	const { id } = req.query;
	// console.log(id);
	connection.query(
		`select * from image where (id)  = (?)`,
		[id],
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

app.listen(PORT, () => console.log("Hello bitch running on 5000 "));
