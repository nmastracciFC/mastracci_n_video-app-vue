var mysql = require('mysql');
var config = require('../config');

// var connect = mysql.createConnection({
	//previously this would only open one connection but 
	//when you have a bunch of people who are trying to hit it
	//you need this in order to be able to have everyone develop
var connect = mysql.createPool({

	host: config.host,
	port: config.port,
	user:config.user,
	password:config.password,
	database:config.database,
	connectionLimit: 20,
	queueLimit: 100,
	waitForConnection: true
});

module.exports = connect;