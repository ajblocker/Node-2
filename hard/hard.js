// HARD: An express app which has 3 api endpoints. One end point takes in two arrays, 
// merges and sorts them in ascending order, 
// and returns the result. A second end point takes in any string as a single argument, 
// and returns the string in reverse order. The third api returns the current date and time
const express = require('express');
const app = express();

//merges array together
app.get('/', (req, res) => {
    let arr = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 10];
    let arr3 = [...arr, ...arr2];
    arr3.sort((a,b) => { return a - b});
    return res.send(arr3);
})


//returns string in reverse order
//splits string, reverses it and joins them back together
app.get('/reverse/:name', (req, res) => {
    let name = req.params.name
    return name.split("").reverse().join("");

});
//return current date and time
app.get('/datetime', (req, res) => {
    let date = new Date();
    //let dateTime = date+' '+time;
    res.send(date);
})

//server
app.listen(3006, () => {
    console.log('Server listening on port 3006')
})

