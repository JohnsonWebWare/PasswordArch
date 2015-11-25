'use strict';

var fs = require('fs'),
    ursa = reuire('ursa');

module.exports = encrypt = function (pass, pub) {
	return ursa.createPublicKey(fs.readFileSync('../../.private/.pub/' + pub)).encrypt(pass, 'utf8', 'hex');
}