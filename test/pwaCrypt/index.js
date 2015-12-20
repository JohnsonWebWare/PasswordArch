'use strict';

var fs = require('fs'),
		os = require('os'),
		ursa = require('ursa'),
		expect = require('chai').expect,
		pwaCrypt = require('../../lib/pwaCrypt');

var testData = {
	user: 'user',
	site: 'site',
	pin: 'pin',
	crtName: 'pwArchTest',
	pass: '122322'
};

var keyFile = os.homedir() + '/.pwArch/.keys/' + testData.crtName + '.pem';
var pubFile = os.homedir() + '/.pwArch/.pub/' + testData.crtName + '.pub';


var pem = ursa.generatePrivateKey(4096, 65537);
fs.writeFileSync(keyFile, pem.toPrivatePem('utf8'), { mode: '0600' });
fs.writeFileSync(pubFile, pem.toPublicPem('utf8'), { mode: '0600' });


var encrypted = pwaCrypt.encrypt(testData.pass, testData.crtName);
var decrypted = pwaCrypt.decrypt(encrypted, testData.crtName);

describe('pwaCrypt', function () {
	it('Should be able to encrypt a string', function (done) {
		expect(encrypted, 'encryption').to.not.equal(testData.pass);
		
		done();
	});

	it('Should be able to decrypt a string', function (done) {
		expect(decrypted, 'decryption').to.equal(testData.pass);

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