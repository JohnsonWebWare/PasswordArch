'use strict';

var pwaCrypt = require('./lib/pwaCrypt');

var crtName = 'pwArch';

var encrypted = pwaCrypt.encrypt('122322', crtName);
console.log(encrypted);
var decrypted = pwaCrypt.decrypt(encrypted, crtName);
console.log(decrypted);