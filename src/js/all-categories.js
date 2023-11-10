const BASE_URL = `https://books-backend.p.goit.global/`;
const allList = document.querySelector(`.all-categories`);

function fetchAllCategories() {
  return fetch(`${BASE_URL}books/category-list`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}

fetchAllCategories()
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
