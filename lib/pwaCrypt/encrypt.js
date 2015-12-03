'use strict';

var fs = require('fs'),
    ursa = require('ursa'),
    path = require('path');

module.exports = function (data, key) {
	return ursa.createPublicKey(
		fs.readFileSync(path.resolve(__dirname + '/../../.secrets/.pub/' + key + '.pub')))
		.encrypt(data, 'utf8', 'hex');
}