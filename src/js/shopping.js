import { getCategoryList } from './images-api';

const bookList = document.querySelector('.shopping-list');
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
       < class="shopping-delete-btn">
        <img
          class="shopping-list-svg"
          width="16"
          height="16"
          src="..//img/trash.png"
        />
  
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
  emptyList.hidden = 'true';
} else {
  emptyList;
  emptyList.hidden = 'false';
}

deleteBtn.addEventListener('click', deleteItem);

function deleteItem() {
  if (localStorage.contains(markup)) {
    localStorage.removeItem(markup);
  }
  return getFullCart, (emptyList.hidden = 'true');
}
