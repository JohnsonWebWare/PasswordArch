'use strict';

var fs = require('fs'),
    ursa = require('ursa'),
    path = require('path'),
    os = require('os');

module.exports = function (data, key) {
	return ursa.createPublicKey(
		fs.readFileSync(path.resolve(os.homedir() + '/.pwArch/.pub/' + key + '.pub')))
		.encrypt(data, 'utf8', 'hex');
}