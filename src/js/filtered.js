import { getBooksById } from "./images-api"

getBooksById()
.then(data => {
    const categoryListContainer = document.querySelector('.book-category-list');

    data.forEach(category => {
  
      const categoryTitle = document.createElement('h4');
      categoryTitle.textContent = `${category.list_name}`.toUpperCase();

      const booksList = document.createElement('ul');
      // add class
      booksList.className = 'filtered-list';

      category.books.forEach(book => {
        const bookItem = document.createElement('li');
        // add class
        bookItem.className = 'filtered-item';
        
      // update code with add class
        bookItem.innerHTML = `
          <img src="${book.book_image}" alt="${book.title}" />
          <p class="filtered-subtitle">${book.title}</p>
          <p class="filtered-author">${book.author}</p>
        `;
        
        booksList.appendChild(bookItem);
      });

      categoryListContainer.appendChild(categoryTitle);
        categoryListContainer.appendChild(booksList);
        });
  })
  .catch(error => console.error('Error fetching data:', error));