// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
    constructor(title, genre, author, isRead) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead || false;
    }
}

const book1 = new Book('The alchemist', 'Fiction', 'Paulo Coelho', true);
const book2 = new Book('Star Wars', 'Fiction', 'Fantasy');
const book3 = new Book('The Shining', 'Horror', 'Stephen King', true);
const book4 = new Book('The Hobbit', 'Alice in Wonderland', 'Lord of the Rings');
const book5 = new Book('And Then There Were None', 'Dream of the Red Chamber', 'The Da Vinci Code');

console.log(book1, book2, book3, book4, book5);
