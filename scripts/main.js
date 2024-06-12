import { ActorList } from "./ActorList.js"
import { GenreList } from "./GenreList.js"
import { ShowList } from "./ShowList.js"

const html = `
      <div>
        <section id="actorList" class = "list">
        <h2>Actors</h2>
        ${ActorList()}
        </section>
        
        <section id="genreList" class = "list">
        <h2>Genres</h2>
        ${GenreList()}
        </section>
      </div>
      <section id="showList" class = "list">
      <h2>Shows</h2>
      ${ShowList()}
      </section>
`
const container = document.querySelector("#content")
container.innerHTML = html