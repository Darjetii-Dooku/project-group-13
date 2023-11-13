import { getCategoryList } from './images-api';
import { getCategory } from './images-api';
const allList = document.querySelector(`.all-categories`);
const listCategory = document.querySelector(`.book-category-list`);
const textTitle = document.querySelector(`.Books-best-sellers-text`);
const colorTitleText = document.querySelector(`.Books-best-sellers-text-span`);

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
        // const titleName = data.forEach((list, i) => {
        //   console.log(list[i]);
        // const { list_name } = list[i];
        // return (textTitle.innerHTML = `<h1 class="Books-best-sellers-text">${titleName.list_name[i]}</h1>`);
        // });

        const listItem = data
          .map(
            ({ book_image, title, author, _id }) => `<div id="${_id}">
          <img src="${book_image}" alt="${title}" width="180px" height="256px" />
          <p>${title}</p>
          <p>${author}</p>
        </div>`
          )
          .join(``);

        return (listCategory.innerHTML = listItem);
      })
      .catch(err => console.log(err));
  }
}

// getCategoryList()
//   .then(data => {
//     const titleName = data[0]
//       .map(
//         ({
//           list_name,
//         }) => `<h1>${list_name}<span class="Books-best-sellers-text-span">Books</span>
//         </h1>`
//       )
//       .join(``);
//     return (textTitle.innerHTML = titleName);
//   })
//   .catch(error => console.log(error));
