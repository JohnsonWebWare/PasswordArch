'use strict';

var fs = require('fs'),
    crypto = require('crypto'),
    encrypt = require('./encrypt'),
    path = require('path'),
    os = require('os');

module.exports = function (user, site, pin, key, pass, callBack) {

	fs.writeFile(
		path.resolve(os.homedir() + '/.pwArch/.store/' + crypto.createHmac('sha256', pin).update(user + site).digest('hex')),
		encrypt(pass, key),
		{ mode: '0600' },
		function (err) {
			/* istanbul ignore if*/
			if (err)
				return callBack(err, null);
			return callBack(null, 'Password saved');
		});
}