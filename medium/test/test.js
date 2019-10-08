// An app which validates a user Id against an in-memory db of users authorized to access the application. 
// This function should be written asynchronously (it returns a Promise). 
// If the userID is present in the database, the function returns the boolean true, otherwise 
// it parses the userID string to determine if the string is valid. 
// A valid string for a userID is a minimum of 8 characters, at least 1 special character 
// and at least 1 capital letter. If the userID passes the parsing test, 
// the function returns a message stating that the userID was not found, 
// but asking the user if they would like to register for the site. If the userID fals the parsing test, 
// a message is returned notifying the user that they are not authorized to access the site

const expect = require('chai').expect
const userCheck = require('../medium.js')

//search through userCheck to equal true
describe('userDb', function(){
    it('User is not found', function(){
        const response = userCheck('$Darkmagic');
        response.then(res => expect(res).to.equal(true));
    });
    it('returns true if userID is valid', function() {
        expect(userCheck('%sdiasbsaidbW')).to.deep.equal('User was not found, would you like to register for the site?')
    });
    // shows error
    it('returns userID was not valid', function(){
        expect(userCheck('wakawka')).to.deep.not.equal('You are not authorized to access this site');
    })
})
