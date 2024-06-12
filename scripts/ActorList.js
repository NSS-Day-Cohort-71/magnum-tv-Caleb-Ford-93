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
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        //check if click target has dataset.type === actor
        if(itemClicked.dataset.type === "actor"){
            //if true:
            //invoke getShows() and store in variable "allShows"
            const allShows = getShows()
        //declare "showsStaringIn" variable as empty string
            let showsStaringIn = ``
        //iterate through "allShows" with for..of loop
        for (const show of allShows) {
            //for each show, if actor's showId === show's id
            if(itemClicked.dataset.showid.includes(show.id)){
                //append show to "showsStaring in"
                showsStaringIn += `${show.name}\n`
            }
        }
        // window.alert: (actorName) stars in these shows: (list shows)
        window.alert(`${itemClicked.dataset.name} stars in these shows:\n${showsStaringIn}`)
        }
    }
)
    