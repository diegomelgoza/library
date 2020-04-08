let myLibrary = [];
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'No');
addBookToLibrary(theHobbit);

// Open and close the add book form
function openForm() {
    document.getElementById('bookForm').style.display = 'block';
}
function closeForm() {
    document.getElementById('bookForm').style.display = 'none';
}

function removeBook(x) {
    let tr = x.parentNode.parentNode.rowIndex;
    console.log(tr);
    document.getElementById("table-body").deleteRow(tr-1);
}

//add the book to the array
function addBookToLibrary(book) {
    myLibrary.push(book);
    render(book);
}

// book constructor
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

// when user clicks submit, the book is added
const button = document.querySelector('form');
button.addEventListener('submit', (e) => {
    // prevent refresh
    e.preventDefault();

    let userTitle = document.getElementById('title').value,
        userAuthor = document.getElementById('author').value,
        userPages = document.getElementById('pages').value,
        userRead = document.getElementById('read').value;
    let myBook = new Book(userTitle, userAuthor, userPages, userRead);
    addBookToLibrary(myBook);
    clear();
    closeForm();
})

// clear form
function clear() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').value = 'Yes';
}

// prints the books onto the screen
function render(book) {
    const table = document.getElementById('table-body');
    const row = document.createElement('tr');

    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td> 
    <td>${book.read}</td>
    <td><input type="button" value="Remove" onclick="removeBook(this)"></td>`;
    
    table.appendChild(row);
}