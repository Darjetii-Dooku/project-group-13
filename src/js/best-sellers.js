
fetch(`https://books-backend.p.goit.global/books/top-books`)
  .then(res => res.json())
  .then(data => {
    const categoryListContainer = document.querySelector('.book-category-list');

    data.forEach(category => {
  
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = `Category - ${category.list_name}`.toUpperCase();

      const booksList = document.createElement('ul');

      category.books.forEach(book => {
        const bookItem = document.createElement('li');
        //Якщо треба додати клас на лі, використовуй наступне
        //bookItem.classList.add('your-class-name');  Замість 'your-class-name' 
        //Для назви секції(categoryItem) - юзай код зверху, якщо треба клас
        //Якщо треба картку запхати в список - просто як звичайно огорни в список і буде норм
        //Я чекнув, воно все працює, як треба
        //Класи в шаблон картки додавай в розмітку знизу, воно теж працює
        //Якщо якась шляпа з mobile first - я прогнав код через GPT, вже є інфа, як то зробити
        // Напишеш в телеграмі і я скину скрін
        
  
        bookItem.innerHTML = `
          <img src="${book.book_image}" alt="${book.title} width="180px" height="256px"" />
          <p>${book.title}</p>
          <p>${book.author}</p>
        `;
        
        
        booksList.appendChild(bookItem);
      });

      categoryListContainer.appendChild(categoryTitle);
      categoryListContainer.appendChild(booksList);

      const seeMoreButton = document.createElement('button');
      seeMoreButton.type = 'button';
      seeMoreButton.textContent = 'See More';
      categoryListContainer.appendChild(seeMoreButton);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

