var MySQL = require('mysql');

var connection = MySQL.createConnection({
        host: 'localhost',
        user: 'root',			// Username of MySQL Database
        password: '12345678',	// Password for user mentioned above
        database: 'packt_javascript'
});

connection.connect(function (err) {
    if (err) {
           console.error('error connecting: ' + err.stack);
           return;
    }

    console.log('connected as id ' + connection.threadId);
});

connection.end();