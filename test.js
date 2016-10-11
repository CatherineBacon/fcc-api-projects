var assert = require('assert');

var server = require('./server.js');

describe('Server', function() {

    describe('getNaturalDate', function() {
        it('should exist', function() {
            assert(server.getNaturalDate);
        });
        
        it('shoud return a date correctly as a string', function() {
            var testDate = new Date('11 October 2014'),
                expectedAnswer = 'October 11, 2014';
            assert.equal(server.getNaturalDate(testDate), expectedAnswer);
        });
    });

    describe('dateFromString', function() {
        it('should exist', function() {
            assert(server.dateFromString);
        });

        it('should return an object with unix and natural dates', function() {
            var result = server.dateFromString();
            assert(result.hasOwnProperty('unix'));
            assert(result.hasOwnProperty('natural'));
        });

        it('should work when given a natural date', function() {
            var result = server.dateFromString('January 27, 1983');
            assert.equal(result.unix, '412470000000');
            assert.equal(result.natural, 'January 27, 1983');
        });

        it('should work when given a unix date', function() {
            var result = server.dateFromString('1');
            assert.equal(result.unix, '1');
            assert.equal(result.natural, 'January 1, 1970');
        });
    });
    
});
