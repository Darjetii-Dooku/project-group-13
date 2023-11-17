import"./assets/header-7c7bf7d1.js";document.querySelector(".shopping-book-ul");document.querySelector(".shopping-delete-btn");localStorage.getItem("shoppingList")!==null&&(document.querySelector(".shopping-list"),c());function c(){const l=JSON.parse(localStorage.getItem("shoppingList")),o=document.querySelector(".shopping-book-ul");console.log(o),o.bookList.innerHTML=l.map(({id:s,title:i,author:n,book_image:e,description:t,buy_links:p})=>`
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
      <li><img class="shopping-book-image" src="${e}" alt="${i}" /></li>
      <li class="shopping-book-title">${i} ${s}</li>
      <li class="shopping-book-descrip"><p>${t}</p></li>
      <li class="shopping-book-author">${n}</li>
      <li class="amazon-kindle">
        <a class='kindle-link' href='${p}'>
          <img
            class="kindle-pic"
            src="../img/kindle.png"
            style="background-color: transparent"
            alt="kindle"
          />
        </a>
      </li>
    </ul>
  `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
