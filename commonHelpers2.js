import"./assets/header-7c7bf7d1.js";document.querySelector(".shopping-book-ul");document.querySelector(".shopping-delete-btn");if(localStorage.getItem("shoppingList")!==null){const l=document.querySelector(".shopping-list"),o=document.querySelector(".shopping-list-empty");o.style.display="none",l.style.display="flex",c()}function c(){const l=JSON.parse(localStorage.getItem("shoppingList")),o=document.querySelector(".shopping-book-ul");console.log(o),o.innerHTML=l.map(({id:i,title:s,author:e,book_image:t,description:n,buy_links:p})=>`
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
      <li><img class="shopping-book-image" src="${t}" alt="${s}" /></li>
      <li class="shopping-book-title">${s} ${i}</li>
      <li class="shopping-book-descrip"><p>${n}</p></li>
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