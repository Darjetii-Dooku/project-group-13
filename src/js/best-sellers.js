import { getTopBooks, getCategory } from "./images-api";

const listCategory = document.querySelector('.book-category-list');
const bsH1 = document.querySelector('.Books-best-sellers-text');

const myBtn = document.querySelector('.scroll-btn');

function renderCategoryBooks(categoryName) {
  getCategory(categoryName)
    .then(data => {
      console.log(data);
      const listItem = data
        .map(({ book_image, title, author, _id }) => `
          <li class="bs-book-item-fil">
            <img src="${book_image}" alt="${title}" class="bs-book-image" />
            <p class="title-book">${title}</p>
            <p class="author-book">${author}</p>
          </li>`)
        .join('');

      listCategory.innerHTML = `<ul class="bs-book-list-fil">${listItem}</ul>`;
    })
    .catch(error => console.error('Error fetching data:', error));
}


document.addEventListener('DOMContentLoaded', () => {
  getTopBooks()
    .then(data => {
      const categoryListContainer = document.querySelector('.book-category-list');

      data.forEach(category => {
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = `${category.list_name}`.toUpperCase();
        categoryTitle.className = 'bs-h3';

        const booksList = document.createElement('ul');
        booksList.className = 'bs-book-list';

        category.books.forEach(book => {
          const bookItem = document.createElement('li');
          bookItem.className = 'bs-book-item';
          bookItem.innerHTML = `
            <img class="bs-book-image" src="${book.book_image}" alt="${book.title}" />
            <p class="title-book">${book.title}</p>
            <p class="author-book">${book.author}</p>
          `;
          booksList.appendChild(bookItem);
        });

        categoryListContainer.appendChild(categoryTitle);
        categoryListContainer.appendChild(booksList);

        const seeMoreButton = document.createElement('button');
        seeMoreButton.type = 'button';
        seeMoreButton.classList.add('bs-buttom');
        const seeMoreText = document.createElement('span');
        seeMoreText.textContent = 'See More';
        seeMoreText.classList.add('bs-buttom-name');
        seeMoreButton.appendChild(seeMoreText);

        categoryListContainer.appendChild(seeMoreButton);

        seeMoreButton.addEventListener('click', function () {
          renderCategoryBooks(category.list_name);
          bsH1.textContent = category.list_name;
        });
      });
    })
    .catch(error => console.error('Error fetching data:', error));

  myBtn.addEventListener('click', function () {
    scrollToTop();
  });
});

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scrollF();
};

function scrollF() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}
