import { getTopBooks } from "./images-api"

getTopBooks()
.then(data => {
    const categoryListContainer = document.querySelector('.book-category-list');

    data.forEach(category => {
  
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = `${category.list_name}`.toUpperCase();

      const booksList = document.createElement('ul');
      // add class
      booksList.className = 'bs-book-list';

      category.books.forEach(book => {
        const bookItem = document.createElement('li');
        // add class
        bookItem.className = 'bs-book-item';
        
      // update code with add class
        bookItem.innerHTML = `
          <img src="${book.book_image}" alt="${book.title}"" />
          <p class="title-book">${book.title}</p>
          <p class="author-book">${book.author}</p>
        `;
        
        booksList.appendChild(bookItem);
      });

      categoryListContainer.appendChild(categoryTitle);
      categoryListContainer.appendChild(booksList);

      const seeMoreButton = document.createElement('button');
      seeMoreButton.type = 'button';
      // add class
      seeMoreButton.classList.add('bs-buttom');

      // update code with add class
      // seeMoreButton.textContent = 'See More';
      const seeMoreText = document.createElement('span');
      seeMoreText.textContent = 'See More';
      seeMoreText.classList.add('bs-buttom-name');
      seeMoreButton.appendChild(seeMoreText);

      categoryListContainer.appendChild(seeMoreButton);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

