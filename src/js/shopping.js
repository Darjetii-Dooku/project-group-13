import { getCategoryList } from './images-api';

const bookList = document.querySelector('.shopping-book-ul');
const emptyList = document.querySelector('.shopping-list-empty');
const deleteBtn = document.querySelector('.shopping-delete-btn');

const BOOKS_STORAGE = 'books';

function getFullCart() {
  renderSavedBooks = JSON.parse(localStorage.getItem(BOOKS_STORAGE) ?? []);

  const markup = renderSavedBooks
    .map(
      ({
        id,
        book_image,
        title,
        description,
        author,
        amazon_product_url,
        genre,
        buy_links,
      }) =>
        `
        <ul>
       <li>
      <button type= button class="shopping-delete-btn">
        <svg class="shopping-list-svg" width="18" height="18">
          <use href="../css/sprite.svg#icon-trash"></use>
        </svg>
      </button>
    </li>
    <li><img class="shopping-book-image" src= ${book_image} alt=${title} /></li>
    <li class="shopping-book-title" >${title} ${id}</li>
    <li class="shopping-book-genre">${genre}</li>
    <li class="shopping-book-descrip"><p>${description}</p></li>
    <li class="shopping-book-author">${author}</li>
    <li class="amazon-kindle">
     <a class= amazon-link, href = '${amazon_product_url}'><img
        class="amazon-pic"
        src="../img/amazon.png"
        style="background-color: transparent"
        alt="amazon"
      /> </a>
      < class= 'kindle-link' href='${buy_links}'><img
        class="kindle-pic"
        src="../img/kindle.png"
        style="background-color: transparent"
        alt="kindle"
      /> </a>
    </li></ul>`
    )
    .join('');
}

if (markup.length > 0) {
  bookList.innerHTML = markup;
  emptyList.style.display = 'none';
} else {
  emptyList;
  emptyList.style.display = 'blocked';
}

deleteBtn.addEventListener('click', deleteItem);

function deleteItem() {
  if (localStorage.contains(markup)) {
    localStorage.removeItem(markup);
  }
  return getFullCart;
  emptyList.style.display = 'none';
}
