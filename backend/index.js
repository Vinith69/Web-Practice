const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const multer = require("multer");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "kalajagattu_creations",
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
			if (!req.body) return res.send(errors);
			// console.log(results);
			res.send(results);
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
