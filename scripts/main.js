import { ActorList } from "./ActorList.js"
import { GenreList } from "./GenreList.js"
import { ShowList } from "./ShowList.js"

const html = `
      <div>
        <h2>Actors</h2>
        <section id="actorList" class = "list">${ActorList()}</section>
        <h2>Genres</h2>
        <section id="genreList" class = "list">${GenreList()}</section>
      </div>
        <h2>Shows</h2>
      <section id="showList" class = "list">${ShowList()}</section>
`
const container = document.querySelector("#content")
container.innerHTML = html