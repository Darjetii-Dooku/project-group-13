

export function openModal(bookInfo) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalDes = document.getElementById('modalDescription');
    // const modalAmazon = document.getElementById('amazon-modal');
    // const modalAppleBook = document.getElementById('apple-book-modal')
  const modalButton = document.getElementById('modal-button')
  
  const modalLi = document.getElementById('bs-book-item')

    modal.style.display = 'block';

    modalImage.src = `${bookInfo.image}`
    modalTitle.textContent = `${bookInfo.title}`
    modalAuthor.textContent = `${bookInfo.author}`
    modalDes.textContent = `${bookInfo.description}`
    // modalAmazon.src = modalAmazon;
    // modalAppleBook.src = modalAppleBook;

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

