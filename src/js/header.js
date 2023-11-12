const elements = {
  theme: document.querySelector('#theme-toggle'),
  body: document.querySelector('body'),
  header: document.querySelector('header'),
  bookshelfIcon: document.getElementById('bookshelf-icon')
};

elements.theme.addEventListener('change', function () {
  elements.header.classList.toggle('dark-theme', elements.theme.checked);

  const useElement = elements.bookshelfIcon.querySelector('use');
  if (elements.theme.checked) {
    // Темна тема
    useElement.setAttribute('href', '/css/sprite.svg#icon-Bookshelf_white');
    useElement.setAttribute('href', '/css/sprite.svg#icon-align-left_white');
  } else {
    // Світла тема
    useElement.setAttribute('href', '/css/sprite.svg#icon-Bookshelf');
    useElement.setAttribute('href', '/css/sprite.svg#icon-align-left');
  }
});

// Опціональний код для перевірки попереднього стану теми при завантаженні сторінки
// const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// if (isDarkTheme) {
//   elements.bookshelfIcon.querySelector('use').setAttribute('href', '/css/sprite.svg#icon-Bookshelf_white');
//   elements.bookshelfIcon.querySelector('use').style.display = 'none';
// }








