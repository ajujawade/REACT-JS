// Destrucing

let movies = [
    {
        title: "Dilwale Dulhania Le Jayenge",
        director: "Aditya Chopra",
        releaseYear: 1995,
        genre: "Romance",
        leadActors: ["Shah Rukh Khan", "Kajol"]
      },
      {
        title: "3 Idiots",
        director: "Rajkumar Hirani",
        releaseYear: 2009,
        genre: "Comedy-Drama",
        leadActors: ["Aamir Khan", "Kareena Kapoor", "R. Madhavan", "Sharman Joshi"]
      },
      {
        title: "Kabhi Khushi Kabhie Gham",
        director: "Karan Johar",
        releaseYear: 2001,
        genre: "Drama",
        leadActors: ["Amitabh Bachchan", "Shah Rukh Khan", "Kajol", "Hrithik Roshan", "Kareena Kapoor"]
      },
      {
        title: "Dangal",
        director: "Nitesh Tiwari",
        releaseYear: 2016,
        genre: "Biographical Sports Drama",
        leadActors: ["Aamir Khan", "Sakshi Tanwar", "Fatima Sana Shaikh", "Sanya Malhotra"]
      },
      {
        title: "Bajirao Mastani",
        director: "Sanjay Leela Bhansali",
        releaseYear: 2015,
        genre: "Historical Romance",
        leadActors: ["Ranveer Singh", "Deepika Padukone", "Priyanka Chopra"]
      }
    ];

// console.log(movies)

// console.log(movies[1].director)

// let [m1,m2,m3,m4,m5] = movies

// console.log(m1)

// let {title,director,releaseYear,genre,leadActors} = m1

// console.log(title)

///////////SPREAD OPEARTOR///////////

const actors =  ["Aamir Khan", "Kareena Kapoor", "R. Madhavan", "Sharman Joshi"]

actors.push("Ajay")
// console.log(actors)

let actors1 = [...actors,"Ashlesha"]

console.log(actors1)
console.log(actors)

//////////REST OPERATOR/////////////

let [a1,...ac] = actors

console.log(a1)
console.log(ac)


//OBJECT WITH SPREAD AND REST


let movie = 
      {
        title: "3 Idiots",
        director: "Rajkumar Hirani",
        releaseYear: 2009,
        genre: "Comedy-Drama",
        leadActors: ["Aamir Khan", "Kareena Kapoor", "R. Madhavan", "Sharman Joshi"]
      }

let {title,...restMovie} = movie

console.log(title)
console.log(restMovie)

let movie2 = {rating:9.9,...movie}

console.log(movie2)