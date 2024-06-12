//import getActors and getShows from database.js

//invoke getActors() and store in variable "allActors"

//define and export a function called ActorList
    //define "actorHTML" and set value to "<ul>"
    //iterate through each actor in "actors" with for..of loop
    //for each actor, append string containing actors name list item to "actorHTML"
        //include dataset in each list item for state
    //after for..of loop is finished, append "</ul>" to "actorHTML"
    //return "actorHTML"

//create click event listener on actor list items
    //check if click target has dataset.type === actor
    //if true:
        //invoke getShows() and store in variable "allShows"
        //declare "showsStaringIn" variable as empty string
        //iterate through "allShows" with for of loop
            //for each show, if actor's showId === show's id
                //append show to "showsStaring in"
        // window.alert: (actorName) stars in these shows: (list shows)