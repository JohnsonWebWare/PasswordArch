'use strict';

var os = require('os'),
		fs = require('fs');

var pwArchDirs = [
	os.homedir() + '/.pwArch',
	os.homedir() + '/.pwArch/.pub',
	os.homedir() + '/.pwArch/.keys',
	os.homedir() + '/.pwArch/.store',
];
for (var i in pwArchDirs) {
	fs.access(pwArchDirs[i], fs.R_OK | fs.W_OK, function (err) {
	  if (err) {
	  	console.error(err);
	  	fs.mkdirSync(pwArchDirs[i], '0700');
	  }
	});
};


module.exports = {
	encrypt: require('./encrypt'),
	store: require('./store'),
	decrypt: require('./decrypt'),
	fetch: require('./fetch')
}