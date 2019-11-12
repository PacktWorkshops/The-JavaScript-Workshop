const express 	= require('express');
const multer 	= require('multer');
const mysql 	= require('mysql');
const morgan 	= require('morgan')
const app 		= express();
const port 		= 3000;

// Middlewares
app.use(morgan(':method :status :url - :response-time ms'));

/*
* Database
*/
// Creating MySQL Connection
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12345678',
  database : 'packt_javascript'
});
 
 // Connection to db
connection.connect();

/*
* File Upload Settings
*/
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      	cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
    	let ext = file.originalname.split('.').pop();
      	cb(null, 'img_' + Date.now() + '.' + ext);
    }
});
let upload = multer({storage: storage});

/*
* Routing
*/
// Landing route
app.get('/', (req, res) => res.send('Hello World!'))

// Upload image route
app.post('/upload/image', upload.single('image'), function (req, res) {
	// Column name: values
	let payload = {
		filename: req.file.filename,
		type: req.file.mimetype,
		original_name: req.file.originalname,
		path: req.file.path,
		size: req.file.size
	}

	// Preparing mysql query
	let query = mysql.format(`INSERT INTO uploads(${Object.keys(payload).join(',')}) VALUES(${Object.keys(payload).fill('?').join(',')})`, Object.values(payload));

	// Execute the query
	connection.query(query, function (error, results, fields) {
	  	if (error) {
	  		// failure
	  		res.status(500).json({err: error, status: 'failed', code: 500});
	  		throw error
	  	};
	  	// Success
	  	res.status(200).json({filepath: req.file.path, status: 'uploaded', code: 200});
	});
})

// Start listening to requests
app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`))
