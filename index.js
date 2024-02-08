function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    // Step 3: Convert response to JSON
    .then(response => response.json())
    // Step 4: Handle JSON data and call renderBooks
    .then(jsonData => renderBooks(jsonData));
}

  // To pass the tests, don't forget to return your fetch!


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
