'use strict';

var fs = require('fs'),
    ursa = require('ursa'),
    path = require('path');

module.exports = function (data, key) {
	return ursa.createPrivateKey(fs.readFileSync(path.resolve(__dirname + '/../../.secrets/.keys/' + key + '.pem'))).decrypt(data, 'hex', 'utf8');
}