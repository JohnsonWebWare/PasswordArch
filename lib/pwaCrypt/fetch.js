'use strict';

var fs = require('fs'),
    crypto = require('crypto'),
    decrypt = require('./decrypt'),
    path = require('path');

module.exports = function (user, site, pin, key, callBack) {
	
	fs.readFile(
		path.resolve(__dirname + '/../../.secrets/.store/' + crypto.createHmac('sha256', pin).update(user + site).digest('hex')),
		'utf8',
		function (err, data) {
			/* istanbul ignore if*/
			if (err)
				return callBack(err, null);
			return callBack(null, decrypt(data, key));
		});
}