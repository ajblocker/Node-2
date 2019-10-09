# Node-2

EASY: An app with a function which returns the number of characters in a string 
and returns the first character in the stringfunction letters()

Medium: An app which validates a user Id against an in-memory db of users authorized to access the application. 
This function should be written asynchronously (it returns a Promise). If the userID is present in the database, 
the function returns the boolean true, otherwise it parses the userID string to determine if the string is valid. 
A valid string for a userID is a minimum of 8 characters, at least 1 special character and at least 1 capital letter. 
If the userID passes the parsing test, the function returns a message stating that the userID was not found, 
but asking the user if they would like to register for the site. If the userID fals the parsing test, 
a message is returned notifying the user that they are not authorized to access the site

Hard: An express app which has 3 api endpoints. One end point takes in two arrays, 
merges and sorts them in ascending order, and returns the result. A second end point takes in any string as a single argument, 
and returns the string in reverse order. The third api returns the current date and time
