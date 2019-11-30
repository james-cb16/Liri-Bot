//read and set any environment variable with the dotenv package
require("dotenv").config();

//import keys.js file and store it in a variable
var keys = require("./keys.js");

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
    request('http://www.omdbapi.com?t=' + userQuery + '$apikey=trilogy', function (error, response) {
        let userMovie = JSON.parse(body);

        let ratingsArr = userMovie.Ratings;
        if (ratingsArr.length > 2) {
        }
        if (!error && response.statusCode === 200) {
            console.log(`Title: ${userMovie.Title} \nCast: ${userMovie.Actors} \nRelease: ${userMovie.Year} \nIMDb Rating: ${userMovie.imdbRating} \nRotten Tomatoes Rating: ${userMovie.Ratings[1].Value} \nPlot : ${userMovie.Plot} \n`)
        }
    })
}