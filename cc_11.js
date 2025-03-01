// Task 1
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title; // string
        this.author = author; // string
        this.isbn = isbn; // number
        this.copies = copies; // number
    }
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    }; // get details of book
    updateCopies(quantity) {
        this.copies += quantity;
    } // update copies of book
}; // class for book

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // Title: The Great Gatsby, Author: undefined, ISBN: 123456, Copies: 5

book1.updateCopies(-1); // udating copies of book
console.log(book1.getDetails()); // Title: The Great Gatsby, Author: undefined, ISBN: 123456, Copies: 4

// Task 2
class Borrower {
    constructor(name, borrowerId,) {
        this.name = name; // string
        this.borrowerId = borrowerId; // number
        this.borrowedBooks = []; // array
    }
    borrowBook(book) {
        this.borrowedBooks.push(book); // adding books to array
    }
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book); // removing books to array
    }
}; // class for borrower

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // [ 'The Great Gatsby' ]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // []

// task 3 
class Library {
    constructor() {
        this.books = []; // array
        this.borrowers = []; // array
    }
    addBook(book) {
        this.books.push(book); // adds books to arryy
    }
    listBooks() {
        this.books.map(book => console.log(book.getDetails())); // lists book details
    }
    addBorrower(borrower) {
        this.borrowers.push(borrower); // adds brrower to array
    }
    // task 4
    lendbook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn); // finds book by isbn
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId); // finds borrower by id
        if (book && borrower) {
        if (book.copies > 0) {
            book.updateCopies(-1); // updates copies
            borrower.borrowBook(book); // borrows selected book
            } 
            else {
                console.log("No copies available");
            }
        } else {
            console.log("Book or borrower not found")
        }
    }
    // task 5
    returnBook(borrowerId, isbn) {
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId); // finds borrower by id
        const book = this.books.find(b => b.isbn === isbn); // finds book by isbn
        if (book) {
            book.updateCopies(1); // updates copies
            if (borrower) {
                borrower.returnBook(book); // returns book
            }
        }
    }
} // class for library

const library = new Library();
library.addBook(book1); // adding book to library
library.listBooks(); // Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3

library.lendbook(201, 123456); // brrrows book
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks); // [ 'The Great Gatsby' ]

library.returnBook(201, 123456); // returns book
console.log(book1.getDetails());

console.log(borrower1.borrowedBooks); // []