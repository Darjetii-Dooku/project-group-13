import"./assets/header-46a102f5.js";document.querySelector(".shopping-book-ul");document.querySelector(".shopping-delete-btn");if(localStorage.getItem("shoppingList")!==null){const l=document.querySelector(".shopping-book-ul"),o=document.querySelector(".shopping-list-empty");o.style.display="none",l.style.display="flex",c()}function c(){const l=JSON.parse(localStorage.getItem("shoppingList")),o=document.querySelector(".shopping-book-ul");console.log(o),o.innerHTML=l.map(({id:i,title:s,author:e,book_image:n,description:t,buy_links:p})=>`
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
      <li><img class="shopping-book-image" src="${n}" alt="${s}" /></li>
      <li class="shopping-book-title">${s} ${i}</li>
      <li class="shopping-book-descrip"><p>${t}</p></li>
      <li class="shopping-book-author">${e}</li>
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
