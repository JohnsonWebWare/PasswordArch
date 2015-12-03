'use strict';

var expect = require('chai').expect,
		pwaCrypt = require('../../lib/pwaCrypt'),
		crtName = 'pwArch';

var testData = {
	user: 'user',
	site: 'site',
	pin: 'pin',
	crtName: 'pwArch',
	pass: '122322'
}

var encrypted = pwaCrypt.encrypt('122322', crtName);
var decrypted = pwaCrypt.decrypt(encrypted, crtName);

describe('pwaCrypt', function () {
	it('Should be able to encrypt a string', function (done) {
		expect(encrypted, 'encryption').to.not.equal('122322');
		
		done();
	});

	it('Should be able to decrypt a string', function (done) {
		expect(decrypted, 'decryption').to.equal('122322');

		done();
	});

	it('Should be able to store an encrypted file', function (done) {
		pwaCrypt.store(testData.user, testData.site, testData.pin, testData.crtName, testData.pass, function (err, success) {
			expect(err, 'err').to.not.exist;
			console.error(err);
			expect(success).to.equal('Password saved');
			console.info(success);

			done();
		});
	});

	it('Should be able to fetch an encrypted password', function (done) {
		pwaCrypt.fetch(testData.user, testData.site, testData.pin, testData.crtName, function (err, password) {
			expect(err, 'no errors').to.not.exist;
			console.error(err);
			expect(password, 'fetched password').to.equal(testData.pass);
			console.info(password);
		});

		done();
	});
});