require('dotenv').config() // this line is mandatory when you want to read variables from the '.env' file 

console.log(`The server will run on port ${process.env.SERVER_PORT}`);
console.log(`my name is ${process.env.MY_NAME}`);
console.log(`my city is ${process.env.MY_CITY} and my language is ${process.env.MY_LANGUAGE}`);