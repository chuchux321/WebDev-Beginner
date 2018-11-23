/*var movies = {
    watched: [
        {
            movie: "In Brudges",
            rating: "5 stars",
        };
        {
            movie: "Mad Max Fury Road",
            rating: "5 stars",
        };
    ]
    notWatched: [
        {
            movie: "Frozen",
            rating: "4.5 stars",
        };
        {
            movie: "Les Miserables",
            rating: "3.5 stars",
        };
    ]
};*/
// correct answer below

var movies = [
{
    title: "In Bruges",
    hasWatched: true,
    rating: 5
},
{
    title: "Frozen",
    hasWatched: false,
    rating: 4.5
}
]

movies.forEach(function(movie){
    var result = "You have ";
    if(movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" = ";
    result += movie.rating + " stars";
    console.log(result)
})
