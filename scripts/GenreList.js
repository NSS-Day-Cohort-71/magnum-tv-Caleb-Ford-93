//import getGenres and getShows from database.js
import { getGenres, getShows } from "./database.js"

//invoke getGenres() and store in variable "allGenres"
const allGenres = getGenres()

//define and export a function called GenreList
export const GenreList = () => {
    //define variable "genreHTML" and set value to "<ul>"
    let genreHTML = `<ul>`
    //iterate through each genre in "genres" with for..of loop
    for (const genre of allGenres) {
        //for each genre, append string containing genres name list item to "genreHTML"
            //include dataset in each list item for state
        genreHTML += `<li data-type="genre"
                           data-name="${genre.name}"
                           data-id="${genre.id}">
                        ${genre.name}</li>`
    }
    //after for..of loop is finished, append "</ul>" to "genreHTML"
    genreHTML += `</ul>`
    //return "genreHTML"
    return genreHTML
}
//create click event listener on genre list items
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
    //check if click target has dataset.type === genre
        if(itemClicked.dataset.type === "genre"){
            //if true:
        //invoke getShows() and store in variable "allShows"
        const allShows = getShows()
        //declare "showsOfThisGenre" variable as empty string
        let showsOfThisGenre = ``
        //iterate through "allShows" with for of loop
        for (const show of allShows) {
             //for each show, if show's genreId === genre's id
             if(show.genreId.includes(parseInt(itemClicked.dataset.id))){
                //append show to "showsOfThisGenre"
                showsOfThisGenre += `${show.name}\n`
             }       
        }
        // window.alert: These shows are in (genreName): (list shows)
        window.alert(`These shows are a ${itemClicked.dataset.name}:\n${showsOfThisGenre}`)
        }
    }
)