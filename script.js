let myLibrary = [];
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'No')

function Book(title, author, pages, read) {
    // the constructor
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary() {
    // do stuff here
    document.getElementById('form').style.display = 'block';
}

function close() {
    document.getElementById('form').style.display = 'none';
}
  
