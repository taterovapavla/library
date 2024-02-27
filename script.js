const myLibrary = [
  {
    title: "The Hobbit",
    author: "Tolkien",
    pages: "295",
    read: false,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    pages: "296",
    read: true,
  },
  {
    title: "Konec stárnutí",
    author: "David Sinclair",
    pages: "543",
    read: true,
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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", false);

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

function createCard(bookListElement) {
  const bookCard = document.createElement("div");
  const bookDescription = document.createElement("p");

  const removeBookButton = document.createElement("button");
  removeBookButton.classList.add("remove__button");

  const toggleReadButton = document.createElement("button");
  toggleReadButton.classList.add("toggle__button");

  bookCard.classList.add("book__card");
  bookCard.append(bookDescription, removeBookButton, toggleReadButton);
  bookListElement.append(bookCard);
  return bookCard;
}

function renderCard(bookCard, book) {
  const bookDescription = bookCard.querySelector("p");
  bookDescription.textContent = `Title: ${book.title} Author: ${book.author} Pages: ${book.pages} Read: ${book.read}`;
  const removeBookButton = bookCard.querySelector(".remove__button");
  removeBookButton.textContent = "Remove";
  const toggleReadButton = bookCard.querySelector(".toggle__button");
  toggleReadButton.textContent = "Read";

  if (book.read === true) {
    toggleReadButton.textContent = "Unread";
  } else {
    toggleReadButton.textContent = "Read";
  }
}

function displayLibrary() {
  const bookListElement = document.getElementById("book-list");
  bookListElement.innerHTML = "";

  myLibrary.forEach((book, bookIndex) => {
    const bookCard = createCard(bookListElement);

    renderCard(bookCard, book);

    function handleClick() {
      myLibrary.splice(bookIndex, 1);
      bookCard.remove();
    }

    function handleToggle() {
      book.read = !book.read;
      renderCard(bookCard, book);
    }

    const removeBookButton = bookCard.querySelector(".remove__button");
    removeBookButton.addEventListener("click", handleClick);
    const toggleReadButton = bookCard.querySelector(".toggle__button");
    toggleReadButton.addEventListener("click", handleToggle);
  });
}

let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let readInput = document.getElementById("read");
let bookForm = document.getElementById("form");

function clearInputs() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "";
}

function addBookToLibrary() {
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

    clearInputs();
  });
}

// Initial display of the library
displayLibrary();

// Call addBookToLibrary after initial display
addBookToLibrary();
