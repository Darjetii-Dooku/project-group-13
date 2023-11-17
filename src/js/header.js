const elements = {
  theme: document.querySelector('#theme-toggle'),
  body: document.querySelector('body'),
  header: document.querySelector('header'),
  bookshelfIcon: document.getElementById('bookshelf-icon'),
  homeButton: document.querySelector('link-home'),
  shoppingButton: document.querySelector('link-shopping')
};

elements.theme.addEventListener('change', function () {
  elements.header.classList.toggle('dark-theme', elements.theme.checked);
  elements.body.classList.toggle('dark-theme', elements.theme.checked);

  const useElement = elements.bookshelfIcon.querySelector('use');
  if (elements.theme.checked) {
    useElement.setAttribute('href', '/css/sprite.svg#icon-Bookshelf_white');
    useElement.setAttribute('href', '/css/sprite.svg#icon-align-left_white');
  } else {
    useElement.setAttribute('href', '/css/sprite.svg#icon-Bookshelf');
    useElement.setAttribute('href', '/css/sprite.svg#icon-align-left');
  }
});


// 