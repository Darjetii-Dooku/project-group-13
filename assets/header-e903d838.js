(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelector(".shopping-book-ul");document.querySelector(".shopping-list-empty");document.querySelector(".shopping-delete-btn");function u(){const o=JSON.parse(localStorage.getItem("shoppingList"));console.log(o);const i=document.querySelector(".shopping-list-empty");console.log(i),i.innerHTML=o.map(({id:r,title:n,author:e,book_image:t,description:l,buy_links:c})=>`
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
      <li><img class="shopping-book-image" src="${t}" alt="${n}" /></li>
      <li class="shopping-book-title">${n} ${r}</li>
      <li class="shopping-book-descrip"><p>${l}</p></li>
      <li class="shopping-book-author">${e}</li>
      <li class="amazon-kindle">
        <a class='kindle-link' href='${c}'>
          <img
            class="kindle-pic"
            src="../img/kindle.png"
            style="background-color: transparent"
            alt="kindle"
          />
        </a>
      </li>
    </ul>
  `).join("")}u();const s={theme:document.querySelector("#theme-toggle"),body:document.querySelector("body"),header:document.querySelector("header"),bookshelfIcon:document.getElementById("bookshelf-icon"),homeButton:document.querySelector("link-home"),shoppingButton:document.querySelector("link-shopping")};s.theme.addEventListener("change",function(){s.header.classList.toggle("dark-theme",s.theme.checked),s.body.classList.toggle("dark-theme",s.theme.checked);const o=s.bookshelfIcon.querySelector("use");s.theme.checked?(o.setAttribute("href","/css/sprite.svg#icon-Bookshelf_white"),o.setAttribute("href","/css/sprite.svg#icon-align-left_white")):(o.setAttribute("href","/css/sprite.svg#icon-Bookshelf"),o.setAttribute("href","/css/sprite.svg#icon-align-left"))});
//# sourceMappingURL=header-e903d838.js.map
