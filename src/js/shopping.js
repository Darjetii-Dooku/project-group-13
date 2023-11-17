import { getCategoryList } from './images-api';

const bookList = document.querySelector('.shopping-book-ul');

const deleteBtn = document.querySelector('.shopping-delete-btn');

const BOOKS_STORAGE = 'shoppingList';

// function getCard() {
//   const localBooks = JSON.parse(localStorage.getItem('shoppingList'))
//   return bookList.innerHTML = localBooks.map(({ id, title, author, book_image, description, buy_links }) => {
//     `
//         <ul>
//        <li>
//        < class="shopping-delete-btn">
//         <img
//           class="shopping-list-svg"
//           width="16"
//           height="16"
//           src="..//img/trash.png"
//         />
  
//       </button>
//     </li>
//     <li><img class="shopping-book-image" src= ${book_image} alt=${title} /></li>
//     <li class="shopping-book-title" >${title} ${id}</li>
//     <li class="shopping-book-descrip"><p>${description}</p></li>
//     <li class="shopping-book-author">${author}</li>
//     <li class="amazon-kindle">
//       < class= 'kindle-link' href='${buy_links}'><img
//         class="kindle-pic"
//         src="../img/kindle.png"
//         style="background-color: transparent"
//         alt="kindle"
//       /> </a>
//     </li></ul>`
//   }).join('');
  
// }
// console.log(getCard())
if (localStorage.getItem('shoppingList') !== null) {
  const list = document.querySelector('.shopping-list');
  
  getCard()
  

}
function getCard() {
  // const emptyList = document.querySelector('.shopping-list-empty');
  
  

  const localBooks = JSON.parse(localStorage.getItem('shoppingList'));
  
  const bookList = document.querySelector('.shopping-book-ul');
  console.log(bookList);
  bookList.
  bookList.innerHTML = localBooks.map(({ id, title, author, book_image, description, buy_links }) => `
    <ul>
      <li>
        <button class="shopping-delete-btn">
          <img
            class="shopping-list-svg"
            width="16"
            height="16"
            src="..//img/trash.png"
          />
        </button>
      </li>
      <li><img class="shopping-book-image" src="${book_image}" alt="${title}" /></li>
      <li class="shopping-book-title">${title} ${id}</li>
      <li class="shopping-book-descrip"><p>${description}</p></li>
      <li class="shopping-book-author">${author}</li>
      <li class="amazon-kindle">
        <a class='kindle-link' href='${buy_links}'>
          <img
            class="kindle-pic"
            src="../img/kindle.png"
            style="background-color: transparent"
            alt="kindle"
          />
        </a>
      </li>
    </ul>
  `).join('')
}






// function getFullCart() {
//   const renderSavedBooks = JSON.parse(localStorage.getItem('shoppingList') ?? []);
//   const markup = renderSavedBooks
//   .map(
//       ({
//         id,
//         book_image,
//         title,
//         description,
//         author,
//         amazon_product_url,
//         genre,
//         buy_links,
//       }) =>
//         `
//         <ul>
//        <li>
//        < class="shopping-delete-btn">
//         <img
//           class="shopping-list-svg"
//           width="16"
//           height="16"
//           src="..//img/trash.png"
//         />
  
//       </button>
//     </li>
//     <li><img class="shopping-book-image" src= ${book_image} alt=${title} /></li>
//     <li class="shopping-book-title" >${title} ${id}</li>
//     <li class="shopping-book-genre">${genre}</li>
//     <li class="shopping-book-descrip"><p>${description}</p></li>
//     <li class="shopping-book-author">${author}</li>
//     <li class="amazon-kindle">
//      <a class= amazon-link, href = '${amazon_product_url}'><img
//         class="amazon-pic"
//         src="../img/amazon.png"
//         style="background-color: transparent"
//         alt="amazon"
//       /> </a>
//       < class= 'kindle-link' href='${buy_links}'><img
//         class="kindle-pic"
//         src="../img/kindle.png"
//         style="background-color: transparent"
//         alt="kindle"
//       /> </a>
//     </li></ul>`
//     )
//     .join('');
//     return markup
//     }

// if (markup.length > 0) {
//   bookList.innerHTML = markup;
//   emptyList.hidden = 'true';
// } else {
//   emptyList;
//   emptyList.hidden = 'false';
// }


// deleteBtn.addEventListener('click', deleteItem);

// function deleteItem() {
//   if (localStorage.contains(markup)) {
//     localStorage.removeItem(markup);
//   }
//   return getFullCart, (emptyList.hidden = 'true');
// }
