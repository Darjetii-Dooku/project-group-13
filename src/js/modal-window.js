export function openModal(bookInfo) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalDes = document.getElementById('modalDescription');

    modal.style.display = 'block';

    modalImage.src = `${bookInfo.image}`;
    modalTitle.textContent = `Title: ${bookInfo.title}`;
    modalAuthor.textContent = `Author: ${bookInfo.author}`;
    modalDes.textContent = `${bookInfo.description}`;

    const closeBtn = document.getElementsByClassName('close')[0];
    
    closeBtn.onclick = function () {
      modal.style.display = 'none';
    };
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }