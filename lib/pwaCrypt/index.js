'use strict';

var home = require('os').homedir(),
		fs = require('fs');

var Dirs = [
	home + '/.pwArch',
	home + '/.pwArch/.pub',
	home + '/.pwArch/.keys',
	home + '/.pwArch/.store'
];

function checkDir (dir) {
	fs.access(dir, fs.W_OK, function (err) {
		if (err) {
			fs.access(dir, fs.R_OK, function (err) {
				if (err) {
					fs.mkdirSync(dir, '0700');
				} else {
					fs.chmodSyncls(dir, '0700');
				}
			});
		}
	});
}

for(var i in Dirs) {
	checkDir(Dirs[i]);
}


module.exports = {
	encrypt: require('./encrypt'),
	store: require('./store'),
	decrypt: require('./decrypt'),
	fetch: require('./fetch')
}