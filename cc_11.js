class Book {
    constructor(title, author, isbn, copies) {
        this.title = title; // string
        this.auther = author; // string
        this.isbn = isbn; // number
        this.copies = copies; // number
    }
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    }; // get details of book
    updateCopies(quantity) {
        this.copies += quantity;
    } // update copies of book
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // Title: The Great Gatsby, Author: undefined, ISBN: 123456, Copies: 5

book1.updateCopies(-1); // udating copies of book
console.log(book1.getDetails()); // Title: The Great Gatsby, Author: undefined, ISBN: 123456, Copies: 4