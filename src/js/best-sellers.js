import { getTopBooks } from './images-api';
import { openModal } from './modal-window';
const listCategory = document.querySelector(`.book-category-list`);

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
          id: book._id,
          title: book.title,
          author: book.author,
          image: book.book_image,
          description: book.description,
          buy_links: book.buy_links[1],
        };

        // update code with add class
        bookItem.innerHTML = `
          <img id="${book._id}" src="${book.book_image}" alt="${book.title}" />
          <p class="title-book">${book.title}</p>
          
          <p class="author-book">${book.author}</p>

        `;
        booksList.appendChild(bookItem);
        // bookItem.addEventListener('click', () => {
        //   openModal(bookInfo.id);
        // });
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
    });
  })
  .catch(error => console.error('Error fetching data:', error));

//Code for scroll button
const myBtn = document.querySelector('.scroll-btn');

window.onscroll = function () {
  scrollF();
};

// listCategory.addEventListener(`click`, openToModal);
// function openToModal(e) {
//   const id = e.target.id;

//   openModal(id);
// }

// function renderCategoryBooks(categoryName) {
//   getCategory(categoryName)
//     .then(data => {
//       console.log(data);
//       const listItem = data
//         .map(
//           ({ book_image, title, author, _id }) => `
//           <li class=“bs-book-item-fil”>
//             <img src=“${book_image}” alt=“${title}” class=“bs-book-image” />
//             <p class=“title-book”>${title}</p>
//             <p class=“author-book”>${author}</p>
//           </li>`
//         )
//         .join('');
//       listCategory.innerHTML = `<ul class=“bs-book-list-fil”>${listItem}</ul>`;
//     })
//     .catch(error => console.error(`Error fetching data:`, error));
// }
// categoryListContainer.appendChild(seeMoreButton);
// seeMoreButton.addEventListener(`click`, function () {
//   renderCategoryBooks(category.list_name);
//   bsH1.textContent = category.list_name;
// });
function scrollF() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    myBtn.style.display = 'block';
  } else {
    myBtn.style.display = 'none';
  }
  function getImageUrl(name) {
    const url = new URL(import.meta.url);
    url.pathname = `../img/support/${name}.png`;
    return url.href;
}
const scrollUrl = getImageUrl(`scroll-b`);
const scrollElement = document.createElement('img');
scrollElement.src = scrollUrl;
scrollElement.classList.add('scroll-icon');
scrollElement.alt = 'scroll-button';
scrollElement.width = '100%';
scrollElement.height = '100%';
const scrollContainer = document.getElementById('scroll-btn'); 
scrollContainer.appendChild(scrollElement);
}


