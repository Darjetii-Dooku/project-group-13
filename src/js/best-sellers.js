import { getTopBooks } from "./images-api"

getTopBooks()
.then(data => {
    const categoryListContainer = document.querySelector('.book-category-list');

    data.forEach(category => {
  
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = `Category - ${category.list_name}`.toUpperCase();

      const booksList = document.createElement('ul');
      booksList.className = 'bs-book-list';

      category.books.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.className = 'bs-book-item';
        bookItem.innerHTML = `
          <img src="${book.book_image}" alt="${book.title}" width="180px" height="256px" />
          <p>${book.title}</p>
          <p>${book.author}</p>
        `;
        //
        
        booksList.appendChild(bookItem);
      });

      categoryListContainer.appendChild(categoryTitle);
      categoryListContainer.appendChild(booksList);

      const seeMoreButton = document.createElement('button');
      seeMoreButton.classList.add('bs-buttom'); 
      seeMoreButton.type = 'button';
      categoryListContainer.appendChild(seeMoreButton);
      const seeMoreText = document.createElement('span');
        seeMoreButton.appendChild(seeMoreText);
        seeMoreText.textContent = 'See More';
        seeMoreText.classList.add('bs-buttom-name');
      categoryListContainer.appendChild(seeMoreButton);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

