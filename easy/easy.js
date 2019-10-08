
// EASY: An app with a function which returns the number of characters in a string 
//and returns the first character in the stringfunction letters() {
const letters = "My name is AJ";
//length of characters
const lettercheck = function(){
         return letters.length 
        
     }
//first letter of string
const first = function(){
    const firstCha = letters.charAt(0)
    return firstCha
}
module.exports = {lettercheck,
                first}