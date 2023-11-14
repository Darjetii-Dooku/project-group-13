import { getTopBooks } from "./images-api";
import { openModal } from "./modal-window";

getTopBooks()
  .then(data => {
    const categoryListContainer = document.querySelector('.book-category-list');

    data.forEach(category => {

      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = `${category.list_name}`.toUpperCase();

      // add class
      categoryTitle.className = 'bs-h3';

      const booksList = document.createElement('ul');
      // add class
      booksList.className = 'bs-book-list';

      category.books.forEach(book => {
        const bookItem = document.createElement('li');
        // add class
        bookItem.className = 'bs-book-item';

        const bookInfo = {
          title: book.title,
          author: book.author,
          image: book.book_image,
          description: book.description,


        };

        // update code with add class
        bookItem.innerHTML = `
          <img src="${book.book_image}" alt="${book.title}" />
          <p class="title-book">${book.title}</p>
          <p class="author-book">${book.author}</p>
        `;
        booksList.appendChild(bookItem);
        bookItem.addEventListener('click', () => {
          openModal(bookInfo);
        });
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

  //Code for scroll button
  const myBtn = document.querySelector('.scroll-btn');

  window.onscroll = function() {
      scrollF();
  };
  
  function scrollF() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          myBtn.style.display = "block";
      } else {
          myBtn.style.display = "none";
      }
  }
  
  myBtn.addEventListener('click', function() {
      scrollToTop();
  });
  
  function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }