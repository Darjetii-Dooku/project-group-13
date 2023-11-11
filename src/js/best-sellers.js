import { getTopBooks } from "/src/js/images-api"

getTopBooks()
.then(data => {
    const categoryListContainer = document.querySelector('.book-category-list');

    data.forEach(category => {
  
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = `Category - ${category.list_name}`.toUpperCase();

      const booksList = document.createElement('ul');

      category.books.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.innerHTML = `
          <img src="${book.book_image}" alt="${book.title}" width="180px" height="256px" />
          <p>${book.title}</p>
          <p>${book.author}</p>
        `;
        
        
        booksList.appendChild(bookItem);
      });

      categoryListContainer.appendChild(categoryTitle);
      categoryListContainer.appendChild(booksList);

      const seeMoreButton = document.createElement('button');
      seeMoreButton.type = 'button';
      seeMoreButton.textContent = 'See More';
      categoryListContainer.appendChild(seeMoreButton);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

