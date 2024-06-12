//import getGenres and getShows from database.js

//invoke getGenres() and store in variable "allGenres"

//define and export a function called GenreList
    //define "genreHTML" and set value to "<ul>"
    //iterate through each genre in "genres" with for..of loop
    //for each genre, append string containing genres name list item to "genreHTML"
        //include dataset in each list item for state
    //after for..of loop is finished, append "</ul>" to "genreHTML"
    //return "genreHTML"

//create click event listener on genre list items
    //check if click target has dataset.type === genre
    //if true:
        //invoke getShows() and store in variable "allShows"
        //declare "showsOfThisGenre" variable as empty string
        //iterate through "allShows" with for of loop
            //for each show, if show's genreId === genre's id
                //append show to "showsOfThisGenre"
        // window.alert: These shows are in (genreName): (list shows)