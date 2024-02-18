const myLibrary = [
  {
    title: "The Hobbit",
    author: "Tolkien",
    pages: "295",
    read: "not yeat",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    pages: "296",
    read: "almost",
  },
  {
    title: "Konec stárnutí",
    author: "David Sinclair",
    pages: "543",
    read: "almost",
  },
];

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

const dialogElement = document.querySelector("dialog");
const showButtonElement = document.getElementById("show-dialog");
const submitButtonElement = document.getElementById("submit-button");
const cancelButtonElement = document.getElementById("cancel-button");

showButtonElement.addEventListener("click", () => {
  dialogElement.showModal();
});

submitButtonElement.addEventListener("click", () => {
  dialogElement.close();
});

cancelButtonElement.addEventListener("click", (e) => {
  e.preventDefault();
  dialogElement.close();
});

const displayLibrary = () => {
  let bookListElement = document.getElementById("book-list");
  bookListElement.innerHTML = "";

  myLibrary.forEach((book) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = `Title: ${book.title} Author: ${book.author} Pages: ${book.pages} Read: ${book.read}`;
    bookListElement.appendChild(paragraph);
  });
};

function addBookToLibrary() {
  let titleInput = document.getElementById("title");
  let authorInput = document.getElementById("author");
  let pagesInput = document.getElementById("pages");
  let readInput = document.getElementById("read");
  let bookForm = document.getElementById("form");

  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.value
    );
    myLibrary.push(newBook);
    console.log(myLibrary);

    // Update the library display
    displayLibrary();

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
  });
}

// Initial display of the library
displayLibrary();

// Call addBookToLibrary after initial display
addBookToLibrary();
