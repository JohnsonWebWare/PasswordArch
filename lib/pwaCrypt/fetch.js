'use strict';

var fs = require('fs'),
    crypto = require('crypto'),
    decrypt = require('./decrypt');

module.exports = function (user, site, pin, key) {
	
	fs.readFileSync(
		'./../../.secrets/.store/' + crypto.createHmac('sha256', pin).update(user + site).digest('hex'),
		function (err, data) {
			if (err)
				return console.error('Unable to retreive password with matching user, site, and pin');
			console.log(decrypt(data, key));
		});
}