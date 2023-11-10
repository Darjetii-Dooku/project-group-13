const BASE_URL = `https://books-backend.p.goit.global/`;

function getCategoryList() {
  return fetch(`${BASE_URL}books/category-list`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}

function getTopBooks() {
  return fetch(`${BASE_URL}books/top-books`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}

function getCategory(listname) {
  return fetch(`${BASE_URL}books/category?category=${listname}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}

function getBooksById(id) {
  return fetch(`${BASE_URL}books/${id}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}

export { getCategoryList };
export { getTopBooks };
export { getCategory };
export { getBooksById };
