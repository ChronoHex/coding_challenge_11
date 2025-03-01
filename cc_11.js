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
    constructor(name, borrowerId, borrowedBooks) {
        this.name = name; // string
        this.borrowerId = borrowerId; // number
        this.borrowedBooks = []; // array
    }
    borrowBook(book) {
        this.borrowedBooks.push(book); // adding books to array
    }
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b.isbn !== book.isbn); // removing books to array
    }
}; // class for borrower

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // [ 'The Great Gatsby' ]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // []