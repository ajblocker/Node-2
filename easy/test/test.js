const expect = require('chai').expect
const {lettercheck, first} = require('../easy')

// EASY: An app with a function which returns the number of characters in a string 
//and returns the first character in the string

console.log(lettercheck)
//string equal 13
describe('letters', function(){
    it('returns length of the string', function(){
        expect(lettercheck()).to.equal(13);
    });
    //first letter of string
    it('returns length of the string', function(){
        expect(first()).to.equal("M");
})
})
