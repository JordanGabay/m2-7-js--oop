// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2.
// Paste them right here:

// Exercise 2.1

class Book {
  constructor(title, genre, author, isRead) {
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.isRead = isRead || false;
  }
}

// const book1 = new Book('The alchemist', 'Fiction', 'Paulo Coelho', true);
// const book2 = new Book('Star Wars', 'Fiction', 'Fantasy');
// const book3 = new Book('The Shining', 'Horror', 'Stephen King', true);
// const book4 = new Book('The Hobbit', 'Alice in Wonderland', 'Lord of the Rings');
// const book5 = new Book('And Then There Were None', 'Dream of the Red Chamber', 'The Da Vinci Code');

// console.log(book1, book2, book3, book4, book5);

// Exercise 2.2

class BookList {
  constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }


// const library = new BookList();

// console.log(library);

//Code for Exercise 2.3 here.

add = (book) => {
  this.books.push(book);
  }


getNumUnread = () => {
  let numUnread = 0;
  this.books.forEach((book) => {
    if (book.isRead === false) {
      numUnread++;
    }
  });

  return numUnread;
};

getNumRead = () => {
  let numRead = 0;
  this.books.forEach((book) => {
    if (book.isRead === true){
      numRead++;
    }
  })

  return numRead;
  }
}

// Exercise 2.3
//
// We want to be able to add books to our BookList, so that we can start a
// collection!
//
// Let's create an `add` method in our BookList class. It should take a book
// as a parameter. When we call `.add`, it should push that new book into the
// `books` array on the `BookList` class. Also, if no Book is being currently read
// we should set currentlyReading to point to this newly added Book.
//
// Books have an `isRead` property, to indicate if we've read it or not.
// Let's also add two new methods:
// - getNumRead
// - getNumUnread
//
// These methods should return the number of books which are read and unread,
// respectively.
//
// The following code will fail by default. Your goal is to get it to run, and output the values specified at the end:

const homeLibrary = new BookList();

// Books are unread by default:
homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));

// But, we can specify that we've read it:
homeLibrary.add(
  new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true)
);

// At this point, we should have 2 unread books, and 1 read book:
console.log(homeLibrary.getNumUnread()); // 2
console.log(homeLibrary.getNumRead()); // 1
