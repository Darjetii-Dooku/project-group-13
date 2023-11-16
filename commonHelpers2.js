import"./assets/support-3d6c898b.js";const c=document.querySelector(".shopping-book-ul"),o=document.querySelector(".shopping-list-empty"),r=document.querySelector(".shopping-delete-btn"),g="books";function d(){renderSavedBooks=JSON.parse(localStorage.getItem(g)??[]),renderSavedBooks.map(({id:s,book_image:l,title:e,description:n,author:t,amazon_product_url:i,genre:a,buy_links:p})=>`
        <ul>
       <li>
      <button type= button class="shopping-delete-btn">
        <svg class="shopping-list-svg" width="18" height="18">
          <use href="../css/sprite.svg#icon-trash"></use>
        </svg>
      </button>
    </li>
    <li><img class="shopping-book-image" src= ${l} alt=${e} /></li>
    <li class="shopping-book-title" >${e} ${s}</li>
    <li class="shopping-book-genre">${a}</li>
    <li class="shopping-book-descrip"><p>${n}</p></li>
    <li class="shopping-book-author">${t}</li>
    <li class="amazon-kindle">
     <a class= amazon-link, href = '${i}'><img
        class="amazon-pic"
        src="../img/amazon.png"
        style="background-color: transparent"
        alt="amazon"
      /> </a>
      < class= 'kindle-link' href='${p}'><img
        class="kindle-pic"
        src="../img/kindle.png"
        style="background-color: transparent"
        alt="kindle"
      /> </a>
    </li></ul>`).join("")}markup.length>0?(c.innerHTML=markup,o.style.display="none"):o.style.display="blocked";r.addEventListener("click",m);function m(){return localStorage.contains(markup)&&localStorage.removeItem(markup),d}
//# sourceMappingURL=commonHelpers2.js.map
