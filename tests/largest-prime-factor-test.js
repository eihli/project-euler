var expect = require('chai').expect;
var primer = require('../src/largest-prime-factor');

describe('isPrime', function() {
  it('returns true if num is prime', function() {
    expect(primer.isPrime(5)).to.equal(true);
  });
});

describe('finding largest prime factor', function() {
});
