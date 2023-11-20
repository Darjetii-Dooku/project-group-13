import { getTopBooks } from './images-api';
import { openModal } from './modal-window';

const listCategory = document.querySelector('.book-category-list');
const loader = document.querySelector('.loader'); // Отримайте посилання на елемент лоудера з DOM

// Показати лоудер перед початком отримання даних
loader.style.display = 'block';

getTopBooks()
  .then(data => {
    const categoryListContainer = document.querySelector('.book-category-list');

    data.forEach(category => {
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = `${category.list_name}`.toUpperCase();
      categoryTitle.className = 'bs-h3';
      const booksList = document.createElement('ul');
      booksList.className = 'bs-book-list';
      category.books.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.className = 'bs-book-item';
        const bookInfo = {
          id: book._id,
          title: book.title,
          author: book.author,
          image: book.book_image,
          description: book.description,
          buy_links: book.buy_links[1],
        };
        bookItem.innerHTML = `
          <img id="${book._id}" src="${book.book_image}" alt="${book.title}" />
          <p class="title-book">${book.title}</p>
          <p class="author-book">${book.author}</p>
        `;
        booksList.appendChild(bookItem);
      });

      categoryListContainer.appendChild(categoryTitle);
      categoryListContainer.appendChild(booksList);
    });

    // Після завершення отримання даних приховати лоудер
    loader.style.display = 'none';
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // У випадку помилки також приховати лоудер
    loader.style.display = 'none';
  });

const scrollUp = document.querySelector('#scrollUp');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollUp.classList.add('show');
  } else {
    scrollUp.classList.remove('show');
  }
});
scrollUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});