'use strict';

var fs = require('fs'),
    ursa = require('ursa'),
    path = require('path'),
    os = require('os');

module.exports = function (data, key) {
	return ursa.createPrivateKey(fs.readFileSync(path.resolve(os.homedir() + '/.pwArch/.keys/' + key + '.pem'))).decrypt(data, 'hex', 'utf8');
}