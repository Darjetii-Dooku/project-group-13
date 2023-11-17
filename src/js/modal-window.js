import { getBooksById } from './images-api';
const listCategory = document.querySelector(`.book-category-list`);

// const listCategory = document.querySelector(`.book-category-list`);
const body = document.querySelector(`body`);
const byModal = document.querySelector(`.modal`);
// bs-book-item; book-category-list
export function openModal(bookInfo) {
  getBooksById(bookInfo)
    .then(idBook => {
      const { title, author, book_image, description, buy_links } = idBook;
      byModal.innerHTML = `<span class="close" id="closeModalBtn">&times;</span>
        <div class="modal-content">
          <img src="${book_image}" class="modal-image" alt="${title}" />
          <div class="text-content-modal">
            <h2 id="modalTitle" class="modal-title">${title}</h2>
            <p id="modalAuthor" class="modal-author">${author}</p>
            <p id="modalDescription" class="modal-description">${description}</p>
          </div>
        </div>
        <button id="modal-add-to-list" type="button" class="modal-button">
          ADD TO SHOPPING LIST
        </button>`;

      body.classList.add('modal-open');
      const closeModalBtn = document.getElementById('closeModalBtn');
      const addToShoppingListBtn = document.getElementById('modal-add-to-list');

      closeModalBtn.addEventListener('click', closeModal);
      addToShoppingListBtn.addEventListener('click', addToShoppingList);

      function closeModal() {
        byModal.style.display = 'none';
        body.classList.remove('modal-open');
      }

      function addToShoppingList() {
        // Получите данные о книге и добавьте их в локальное хранилище
        const bookData = {
          title: title,
          author: author,
          image: book_image,
          description: description,
          buy_links: buy_links,
          // list_name: list_name,
        };
        console.dir(bookData);
        // Получите текущий список книг из локального хранилища
        const shoppingList =
          JSON.parse(localStorage.getItem('shoppingList')) || [];

        // Добавьте новую книгу
        shoppingList.push(bookData);

        // Сохраните обновленный список книг в локальное хранилище
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

        // Закройте модальное окно
        closeModal();
      }

      window.addEventListener('click', function (event) {
        if (event.target === byModal) {
          closeModal();
        }
      });

      byModal.style.display = 'block';
    })
    .catch(err => console.log(err));
}

listCategory.addEventListener('click', openToModal);

function openToModal(e) {
  const id = e.target.id;
  openModal(id);
}
