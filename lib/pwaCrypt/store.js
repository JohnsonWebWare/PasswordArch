'use strict';

var fs = require('fs'),
    crypto = require('crypto'),
    encrypt = require('./encrypt');

module.exports = store = function (user, site, pass, pin, pub) {

	fs.writeFile(
		'../../.private/.store/' + crypto.createHmac('sha256', pin).update(user + site).digest('hex'),
		encrypt(pass, pub),
		function (err) {
			if (err)
				return console.error('Unable to save password');
			console.log('Password stored');
		});
}