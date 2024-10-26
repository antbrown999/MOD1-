//Try creating a json object variable for a book. The book should have a title, description, an author, and number of pages

let book = {
    title:"The Hitchhiker's Guide to the Galaxy",
    description: "The adventures of the only man to survive the destruction of Earth",
    author: "Douglas Adams",
    numPages: 216
}


//Try printing othese object property values in your console individually 
console.log(book.title)
console.log(book.description)
console.log(book.author)
console.log(book.numPages)
console.log(book)

//Update the description of the book
book.description = "Seconds before earth is demolished..."
console.log(book.description)

//create an array of five book objects

let books = [
    {
        title: "The Night Circus",
        description: "Magical competition between two young illusionists",
        author: "Erin Morgenstern",
        numPages: "387"
    },
    {
        title:"The Martian",
        description:"an astronaut becomes stranded on mars and needs to find a way to survive",
        author: "Andy Weir",
        numPages: "369"
    },
    {
        title:"Where the Crawdads Sing",
        description: "A mystery set in the marshes of North Carolina",
        author: "Delia Owens",
        numPages: "368"
    },
    {
        title:"Circe"
        description: "A modern retelling of the life of circe, the greek enchantress",
        author: "Madeline Miller",
        numPages: "393"
    },
    {
        title:"The Silent Patient",
        description: "A thriller about a woman who stops speaking after a murder",
        author: "Alex Michelides",
        numPages: "325"
    }
]


console.log(books)