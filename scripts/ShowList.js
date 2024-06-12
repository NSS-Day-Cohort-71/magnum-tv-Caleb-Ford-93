//import getActors, getGenres, and getShows from database.js
import { getActors, getGenres, getShows } from "./database.js"

//invoke getActors, getGenres, and getShows, then store value in appropriate variables
const allActors = getActors()
const allGenres = getGenres()
const allShows = getShows()

//define and export function ShowList()
export const ShowList = () => {
    //iterate through shows with for..of loop
    let showHTML = `<ul>`
    for (const show of allShows) {
        //declare variables to hold genre and actor
        let currentGenre = ``
        let currentActor = ``
        //for each show, iterate through genres with for..of loop
        for (const genre of allGenres) {
            //if genre.id === show.genreId
            if(genre.id === show.genreId) {
                //append genre.name to genre variable
                currentGenre += `${genre.name} `
            }      
        }    
        //for each show, iterate through actors with for..of loop
        for (const actor of allActors) {
            //if actor.showId === show.Id
            if(actor.showId === show.id){
                //append actor.name to actor variable with \n
                currentActor += `${actor.name}\n`
            }
        }
            
        //create html list item using current show, genre variable and actor variable.
            //html list item structure:  <li>(showName), a (genreName) stars these actors:\n(actorName)</li>
    showHTML += `<li>${show.name}, a ${currentGenre} stars these actors:\n${currentActor}</li>`
    }
    showHTML += `</ul>`
    return showHTML
}
        //REFACTOR AND SEPARATE THESE FUNCTIONS