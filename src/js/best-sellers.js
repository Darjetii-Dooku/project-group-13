function fetchAndRenderBooks(category, containerSelector) {
    fetch(`https://books-backend.p.goit.global/books/category?category=${encodeURIComponent(category)}`)
      .then(response => response.json())
      .then(data => {
        const firstFiveBooks = data.slice(0, 5);
        const container = document.querySelector(containerSelector);
  
        firstFiveBooks.forEach(book => {
          const markup = `<li>
            <img src="${book.book_image}" alt="${book.title}" width="180px" height="256px"/>
            <p>${book.title}</p>
            <p>${book.author}</p>
          </li>`;
          container.insertAdjacentHTML('beforeend', markup);
        });
      })
      .catch(error => console.log(error));
  }
  
  fetchAndRenderBooks("Combined Print and E-Book Fiction", '.cpaef');
  fetchAndRenderBooks("Combined Print and E-Book Nonfiction", '.cpaen');
  fetchAndRenderBooks("Hardcover Fiction", '.hf');
  fetchAndRenderBooks("Hardcover Nonfiction", '.hn');