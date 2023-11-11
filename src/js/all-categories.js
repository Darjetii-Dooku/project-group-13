import { getCategoryList } from './images-api';
import { getCategory } from './images-api';
const allList = document.querySelector(`.all-categories`);
const listCategory = document.querySelector(`.book-category-list`);
getCategoryList()
  .then(data => {
    data
      .sort((a, b) => (a.list_name > b.list_name ? 1 : -1))
      .map(list => {
        const { list_name } = list;

        return allList.insertAdjacentHTML(
          `beforeend`,
          `<li ><a class="list-category" href="">${list_name}</a></li>`
        );
      })
      .join(``);
  })
  .catch(error => console.log(error));

allList.addEventListener(`click`, nameCategories);

function nameCategories(e) {
  e.preventDefault();
  const categoriesName = e.target.textContent;
  if (categoriesName) {
    getCategory(categoriesName)
      .then(data => {
        data
          .map((list, i) => {
            console.dir(i);
            return (listCategory.innerHTML = createMarkup(list));
          })
          .join(``);
      })
      .catch(err => console.log(err));
  } else {
  }
}

function createMarkup(list) {
  const { book_image, title, author } = list;
  return `
          <img src="${book_image}" alt="${title}" width="180px" height="256px" />
          <p>${title}</p>
          <p>${author}</p>
        `;
}
