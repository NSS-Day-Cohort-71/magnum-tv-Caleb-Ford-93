//import getActors, getGenres, and getShows from database.js

//invoke getActors, getGenres, and getShows, then store value in appropriate variables

//define and export function ShowList()
    //iterate through shows with for..of loop
        //declare variables to hold genre and actor
        //for each show, iterate through genres with for..of loop
            //if genre.id === show.genreId
                //append genre.name to genre variable
        //for each show, iterate through actors with for..of loop
            //if actor.showId === showId
                //append actor.name to actor variable with \n
        //create html list item using current show, genre variable and actor variable.
//html list item structure:  <li>(showName), a (genreName) stars these actors:\n(actorName)</li>