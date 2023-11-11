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
        const listItem = data
          .map(
            ({ book_image, title, author }) => `
          <img src="${book_image}" alt="${title}" width="180px" height="256px" />
          <p>${title}</p>
          <p>${author}</p>
        `
          )
          .join(``);

        return (listCategory.innerHTML = listItem);
      })
      .catch(err => console.log(err));
  } else {
  }
}
