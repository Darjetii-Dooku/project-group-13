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
     <a href="${ buy_links[0].url}" target="_blank" class="amazon-link"> <img
                    src="../img/amazonx1.png"
                    srcset="../img/amazonx2.png 2x"
                    alt="Amazon"
                    width="32"
                    height="11"
                    class="amazon-pic"
                  />
                </a>
<a href="${buy_links[1].url}" target="_blank" class="apple-book-link book-link ">
                  <img
                    src="../img/kindlex1.png"
                    srcset="../img/kindlex2.png 2x"
                    alt="kindle books"
                    width="16"
                    class="kindle-pic"
      /> </a>
    </li></ul>`
    )
    .join('');
}

<<<<<<< Updated upstream
if (markup.length > 0) {
  bookList.innerHTML = markup;
  emptyList.hidden = 'true';
} else {
  emptyList;
  emptyList.hidden = 'false';
}

deleteBtn.addEventListener('click', deleteItem);
//if (markup.length > 0) {
// bookList.innerHTML = markup;
// emptyList.hidden = 'true';
//} else {
// emptyList;
// emptyList.hidden = 'false';
//}

//deleteBtn.addEventListener('click', deleteItem);
>>>>>>> Stashed changes

function deleteItem() {
  if (localStorage.contains(markup)) {
    localStorage.removeItem(markup);
  }
  return getFullCart, (emptyList.hidden = 'true');
}

//if (localStorage.contains(markup)) {
// emptyList.hidden = 'true';
// else {
//   bookList.hidden = 'false';

// }
//}
