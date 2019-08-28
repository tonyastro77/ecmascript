let books = ["How to be idle", "2666"];
let genre = ["Self-help book", "Novel"];
let year = [2004, 2004];
let rating = [3.2 , 4.3];
var table = "";

for(var i = 0; i < books.length; i++) {
    table += i+1 + ". " + books[i] + ", " + genre[i] + ", " + year[i] + ", " + rating[i] + "<br>";
}
document.write(table);
