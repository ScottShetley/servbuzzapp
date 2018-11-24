For this to function locally you will need to run the server and to adjust the following in actions.js:

let apiUrl = "https://servbuzz.herokuapp.com/buzzes";
let userUrl = "https://servbuzz.herokuapp.com/users";

to this:

let apiUrl = "http://localhost:8080/buzzes";
let userUrl = "http://localhost:8080/users"
