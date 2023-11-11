import { getCategoryList } from './images-api';
const allList = document.querySelector(`.all-categories`);

getCategoryList()
  .then(data => {
    data
      .sort((a, b) => (a.list_name > b.list_name ? 1 : -1))
      .map(list => {
        const { list_name } = list;

        return allList.insertAdjacentHTML(
          `beforeend`,
          `<li class="list-category"><a href="">${list_name}</a></li>`
        );
      })
      .join(``);
  })
  .catch(error => console.log(error));
