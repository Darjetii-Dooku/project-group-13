// Функция для получения данных из локального хранилища
function getShoppingList() {
  // Получите данные из локального хранилища по ключу "shoppingList"
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  return shoppingList;
}

// Пример использования
const shoppingList = getShoppingList();
console.log(shoppingList); // Выведет список книг из локального хранилища
function displayShoppingList() {
  const shoppingList = getShoppingList();
  const shoppingListUl = document.querySelector('.shopping-book-ul');
  shoppingListUl.innerHTML = '';

  shoppingList.forEach(element => {
    const bookInfo = {
      id: element._id,
      title: element.title,
      author: element.author,
      image: element.book_image,
      description: element.description,
      buy_links: element.buy_links,
      list_name: element.list_name,
    };

    shoppingListUl.innerHTML += `<li>
      <div>
        <img src="${element.book_image}" alt="${element.title}" />
        <div>
          <p class="shopping-book-title">${element.title}</p>
          <p class="shopping-book-genre">${element.list_name}</p>
          <button class="shopping-delete-btn">
            <svg class="shopping-list-svg" width="18" height="18">
              <use href="../css/sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
        <div class="description">${element.description}</div>
        <div>
          <p class="shopping-book-author">${element.author}</p>
          <a class="shopping-list-svg" href=""></a>
          <a class="shopping-list-svg" href=""></a>
        </div>
      </div>
    </li>`;
  });
}
