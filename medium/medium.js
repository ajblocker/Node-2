// An app which validates a user Id against an in-memory db of users authorized to access the application. 
// This function should be written asynchronously (it returns a Promise). 
// If the userID is present in the database, the function returns the boolean true, otherwise 
// it parses the userID string to determine if the string is valid. 
// A valid string for a userID is a minimum of 8 characters, at least 1 special character 
// and at least 1 capital letter. If the userID passes the parsing test, 
// the function returns a message stating that the userID was not found, 
// but asking the user if they would like to register for the site. If the userID fals the parsing test, 
// a message is returned notifying the user that they are not authorized to access the site

//database info
const userDb = [{
    userID: "@HorsePower",
    name: "Ken Smith",
    salary: 67000,
    department: "Developer"},


        {userID: "$Darkmagic",
        name: "Sarah Moore",
        salary: 52000,
        department: "Sales"
 
}]

//search through userDB and finds user, searches for a-z and special characters,
//if length is >=8
const userCheck = (user) => {
    const check = userDb.find(c => c.userID === user)
    if (!check){
        if(/[A-Z]/.test(user) && /[!@#\$%^&*()]/.test(user) && user.length >= 8){
            return "User was not found, would you like to register for the site?"
        } else {
            return "You are not authorized to access this site"
        }
    }

//return promise if check is true, if not return user not found
return new Promise((resolve, reject) => {
    if (check) {
        resolve(true)
        } else {
            reject('User is not found')
        }
    })
}
module.exports = userCheck;
