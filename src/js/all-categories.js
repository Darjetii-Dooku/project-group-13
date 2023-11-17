import { getCategoryList } from './images-api';
import { getCategory } from './images-api';
import { getTopBooks } from './images-api';
import { openModal } from './modal-window';
import { getBooksById } from './images-api';
// import './best-sellers.js';
const allList = document.querySelector(`.all-categories`);
const listCategory = document.querySelector(`.book-category-list`);
const body = document.querySelector(`main`);
const modal = document.querySelector(`.modal`);

// .book-category-list .bs-book-list
const textTitle = document.querySelector(`.Books-best-sellers-text`);
const activeCategory = document.querySelector(`.active-all-categories`);

activeCategory.classList.remove('inactive-all-categories');

getCategoryList()
  .then(data => {
    data
      .sort((a, b) => (a.list_name > b.list_name ? 1 : -1))
      .map(list => {
        const { list_name } = list;

        return allList.insertAdjacentHTML(
          `beforeend`,
          `<li><a class="list-category"href="">${list_name}</a></li>`
        );
      })
      .join(``);
  })
  .catch(error => console.log(error));

allList.addEventListener(`click`, nameCategories);

function nameCategories(e) {
  e.preventDefault();

  const categoriesName = e.target.textContent;
  if (categoriesName === `All categories`) {
    activeCategory.classList.remove('inactive-all-categories');
    activeCategory.classList.add('active-all-categories');
    textTitle.innerHTML = `Best Sellers`;
    const textSpan = ` Books`;
    let span = document.createElement('span');
    span.classList.add(`Books-best-sellers-text-span`);
    span.textContent = textSpan;
    textTitle.appendChild(span);
    getTopBooks()
      .then(data => {
        const categoryListContainer = document.querySelector(
          '.book-category-list'
        );

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

          categoryListContainer.appendChild(seeMoreButton);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  } else {
    activeCategory.classList.remove('active-all-categories');
    activeCategory.classList.add('inactive-all-categories');
    const nameTitle = categoriesName.split(` `);
    const changeNameTitle = nameTitle.slice(0, -1);

    const spanName = categoriesName.split(' ').pop();

    textTitle.innerHTML = changeNameTitle.join(` `);
    let span = document.createElement('span');
    span.classList.add(`Books-best-sellers-text-span`);
    span.textContent = ` ${spanName}`;
    textTitle.appendChild(span);
  }

  if (categoriesName) {
    getCategory(categoriesName)
      .then(data => {
        const listItem = data
          .map(
            ({
              book_image,
              title,
              author,
              _id,
            } = listItem) => `<li  class="bs-book-item">
      <img id="${_id}" class="bs-book-image" src="${book_image}" alt="${title}" />
      <p class="title-book">${title}</p>
      <p class="author-book">${author}</p>
    </li>`
          )
          .join(``);
        console.dir(data);
        listCategory.innerHTML = listItem;
        // listCategory.addEventListener('click', () => {
        //   openModal(bookInfo.id);
        // });
      })
      .catch(err => console.log(err));
  }
}

// listCategory.addEventListener(`click`, openToModal);
// function openToModal(e) {
//   const id = e.target.id;

//   openModal(id);
// }
//   const id = e.currentTarget.children;

//   openModal;
// });
// function openToModel(e) {
//   e.preventDefault();
//   const byId = e.target.id;
//   console.log(byId);
//   if (byId) {
//     getBooksById(byId)
//       .then(idBook => {
//         const { title, author, book_image, description } = idBook;
//         return (modal.innerHTML = openModal(idBook));
//       })
//       .catch(err => console.log(err));
//   }
// }
