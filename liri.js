//read and set any environment variable with the dotenv package
require("dotenv").config();

//import keys.js file and store it in a variable
var keys = require("./keys.js");
var request = require('request');

let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(".");

function command(userInput, userQuery) {
    switch (userInput) {
        case 'movie-this':
            movieThis();
            break;
    }
}

command(userInput, userQuery);

function movieThis() {
    console.log(`Searching for ${userQuery}...`);
    request('http://www.omdbapi.com/?t=' + userQuery + '&apikey=d9209737', function (error, _response, body) {
        let userMovie = JSON.parse(body);

        if (!error) {
            console.log("\nTitle: " + userMovie.Title);
            console.log("Release Year: " + userMovie.Year);
            console.log("IMDB Rating: " + userMovie.imdbRating);
            console.log("Country: " + userMovie.Country);
            console.log("Language: " + userMovie.Language);
            console.log("Plot: " + userMovie.Plot);
            console.log("Actors: " + userMovie.Actors + '\n');
        }
    })
}