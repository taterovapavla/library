const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
  };
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295 pages",
  "not read yet"
);

console.log(theHobbit.info());

function addBookToLibrary() {
  let titleInput = document.getElementById("title");
  let authorInput = document.getElementById("author");
  let pagesInput = document.getElementById("pages");
  let readInput = document.getElementById("read");
  let bookForm = document.getElementById("form");

  console.log(bookForm);

  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.value
    );

    myLibrary.push(newBook);
    console.log(myLibrary);
  });
}
addBookToLibrary();
