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
  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const bookRead = document.createElement("p");
  const removeBookButton = document.createElement("button");
  const toggleReadButton = document.createElement("button");

  bookCard.classList.add("book__card");
  bookTitle.classList.add("book__title");
  bookAuthor.classList.add("book__author");
  bookPages.classList.add("book__pages");
  bookRead.classList.add("book__read");
  removeBookButton.classList.add("remove__button");
  toggleReadButton.classList.add("toggle__button");

  bookCard.append(
    bookAuthor,
    bookTitle,
    bookPages,
    bookRead,
    removeBookButton,
    toggleReadButton
  );

  console.log(bookCard.childNodes);

  bookListElement.append(bookCard);
  return bookCard;
}

function renderCard(bookCard, book) {
  const bookTitle = bookCard.querySelector(".book__title");
  const bookAuthor = bookCard.querySelector(".book__title");
  const bookPages = bookCard.querySelector(".book__pages");
  const bookRead = bookCard.querySelector(".book__read");
  const removeBookButton = bookCard.querySelector(".remove__button");
  const toggleReadButton = bookCard.querySelector(".toggle__button");

  bookTitle.textContent = `Title: ${book.title}`;
  bookAuthor.textContent = `Author: ${book.author}`;
  bookPages.textContent = `Pages: ${book.pages}`;
  bookRead.textContent = `Read: ${book.read}`;
  removeBookButton.textContent = "Remove";
  toggleReadButton.textContent = "Read";

  if (book.read === true) {
    toggleReadButton.textContent = "Read";
    toggleReadButton.classList.add("toggle__button--green");
    toggleReadButton.classList.remove("toggle__button--red");
  } else {
    toggleReadButton.textContent = "Unread";
    toggleReadButton.classList.add("toggle__button--red");
    toggleReadButton.classList.remove("toggle__button--green");
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
