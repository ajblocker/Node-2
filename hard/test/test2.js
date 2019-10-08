// HARD: An express app which has 3 api endpoints. One end point takes in two arrays, 
// merges and sorts them in ascending order, 
// and returns the result. A second end point takes in any string as a single argument, 
// and returns the string in reverse order. The third api returns the current date and time
const expect = require('chai').expect
const request = require('request')


    it('merges arrays in asc order', function(){
        request('http://localhost:3006', (error, response, body) =>{
            expect(body).to.equal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        })
        
    });
    it('return string in reverse order', function(){
        request('http://localhost:3006/reverse/:name', (error, response, body) =>{
            expect(body).to.equal('esrever');
        })
    });
    it('return current date and time', function(){
        request('http://localhost:3006/datetime', (error, response, body) =>{
            expect(body).to.not.equal(2019-09-22);
        })
    });


