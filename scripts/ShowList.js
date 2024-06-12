//import getActors, getGenres, and getShows from database.js
import { getActors, getGenres, getShows } from "./database.js"

//invoke getActors, getGenres, and getShows, then store value in appropriate variables
const allActors = getActors()
const allGenres = getGenres()
const allShows = getShows()
const findGenres = (show) => {
    let currentGenre = ``
    for (const genre of allGenres) {
        //if genre.id === show.genreId
        if(show.genreId.includes(genre.id)) {
            //append genre.name to genre variable
            currentGenre += `${genre.name} `
        }      
    }
    return currentGenre    
}
const findActors = (show) =>{
    let currentActor = ``
    for (const actor of allActors) {
        //if actor.showId === show.Id
        if(actor.showId.includes(show.id)){
            //append actor.name to actor variable with \n
            currentActor += `<li>${actor.name}</li>`
        }
    }
    return currentActor
}
//define and export function ShowList()
export const ShowList = () => {
    //iterate through shows with for..of loop
    let showHTML = `<ul>`
    for (const show of allShows) {
        //for each show, iterate through genres with for..of loop
        let currentGenre = findGenres(show)
        //for each show, iterate through actors with for..of loop
        let currentActor = findActors(show)   
        //create html list item using current show, genre variable and actor variable.
            //html list item structure:  <li>(showName), a (genreName) stars these actors:\n(actorName)</li>
    showHTML += `<li>${show.name}, a ${currentGenre} stars these actors:<ul>${currentActor}</ul></li>`
    }
    showHTML += `</ul>`
    return showHTML
}
        //REFACTOR AND SEPARATE THESE FUNCTIONS
                //I REFACTORED, YA HAPPY?