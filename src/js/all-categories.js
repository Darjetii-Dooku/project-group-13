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
      .map(list => {
        const { list_name } = list;
        return allList.insertAdjacentHTML(
          `beforeend`,
          `<li class="list-category">${list_name}</li>`
        );
      })
      .join(``);
  })
  .catch(error => console.log(error));
