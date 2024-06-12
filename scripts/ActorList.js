//import getActors and getShows from database.js
import { getActors, getShows } from "./database.js"


//invoke getActors() and store in variable "allActors"
const allActors = getActors()
//define and export a function called ActorList
export const ActorList = () => {
    //define "actorHTML" and set value to "<ul>"
    let actorHTML = `<ul>`
    //iterate through each actor in "actors" with for..of loop
    for (const actor of allActors) {
        //for each actor, append string containing actors name list item to "actorHTML"
            //include dataset in each list item for state
        actorHTML += `<li data-type="actor"
                          data-name="${actor.name}"
                          data-id="${actor.id}"
                          data-showId="${actor.showId}">
                        ${actor.name}</li>`   
    }
    //after for..of loop is finished, append "</ul>" to "actorHTML"
    actorHTML += `</ul>`
    //return "actorHTML"
    return actorHTML
}
//create click event listener on actor list items
    //check if click target has dataset.type === actor
    //if true:
        //invoke getShows() and store in variable "allShows"
        //declare "showsStaringIn" variable as empty string
        //iterate through "allShows" with for of loop
            //for each show, if actor's showId === show's id
                //append show to "showsStaring in"
        // window.alert: (actorName) stars in these shows: (list shows)