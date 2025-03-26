
class BookCollection {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getIterator() {
        return new BookIterator(this.books);
    }
}


class BookIterator {
    constructor(books) {
        this.books = books;
        this.index = 0; 
    }

    hasNext() {
        return this.index < this.books.length; 
    }

    next() {
        if (this.hasNext()) {
            return this.books[this.index++]; 
        }
        return null; 
    }
}


const collection = new BookCollection();
collection.addBook("O Senhor dos Anéis");
collection.addBook("1984");
collection.addBook("Dom Quixote");

const iterator = collection.getIterator();

while (iterator.hasNext()) {
    console.log(`Próximo livro: ${iterator.next()}`);
}
