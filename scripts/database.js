const database = {
    genres: [
            {
              id: 1,
              name: 'Drama' 
            },
            {
              id: 2,
              name: 'Comedy' 
            },
            {
              id: 3,
              name: 'Action' 
            },
            {
              id: 4,
              name: 'Sci-Fi' 
            },
            {
              id: 5,
              name: 'Fantasy' 
            },
            {
              id: 6,
              name: 'Horror' 
            },

  ],
    shows: [
            { 
              id: 1, 
              name: 'The Red Moon', 
              genreId: [1,4] 
            },
            { 
              id: 2, 
              name: 'Laughter Lane', 
              genreId: [2] 
            },
            { 
              id: 3, 
              name: 'Storm Riders', 
              genreId: [3]
            },
            { 
              id: 4, 
              name: 'Galactic Journey', 
              genreId: [4] 
            },
            { 
              id: 5, 
              name: 'Mystic Woods', 
              genreId: [5] 
            },
            { 
              id: 6, 
              name: 'Haunted Nights',
              genreId: [6] 
            },
            { 
              id: 7, 
              name: 'Future Chronicles', 
              genreId: [4] 
            },
            { 
              id: 8, 
              name: 'Enchanted Tales', 
              genreId: [5] 
            },
],
    actors: [
            {
              id: 1, 
              name: 'John Doe', 
              showId: [1,2,3] 
            },
            {
              id: 2, 
              name: 'Jane Smith', 
              showId: [2,4] 
            },
            {
              id: 3, 
              name: 'Alice Johnson', 
              showId: [3] 
            },
            {
              id: 4, 
              name: 'Bob Brown', 
              showId: [4,6] 
            },
            {
              id: 5, 
              name: 'Eva Green',
              showId: [5] 
            },
            {
              id: 6, 
              name: 'Tom White', 
              showId: [6,8] 
            },
            {
              id: 7, 
              name: 'Linda Black', 
              showId: [1,7,8] 
            },
            {
              id: 8, 
              name: 'Gary Blue',
              showId: [8] 
            }
]};

export const getShows = () => 
    database.shows.map((show) => ({ ...show }))

export const getActors = () => 
  database.actors.map((actor) => ({ ...actor }))

export const getGenres = () => 
  database.genres.map((genre) => ({ ...genre }))