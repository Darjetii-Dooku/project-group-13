import"./assets/support-56767e4c.js";import{a as u}from"./assets/vendor-26fe51b3.js";const g="https://books-backend.p.goit.global/";function h(e){if(!e.data)throw new Error("Invalid response format");return e.data}function y(e){throw e.response?new Error(`Request failed with status ${e.response.status}`):e.request?new Error("No response received from the server"):new Error(`Error setting up the request: ${e.message}`)}async function $(){try{const e=await u.get(`${g}books/category-list`);return h(e)}catch(e){y(e)}}async function C(){try{const e=await u.get(`${g}books/top-books`);return h(e)}catch(e){y(e)}}async function L(e){try{const t=await u.get(`${g}books/category?category=${e}`);return h(t)}catch(t){y(t)}}async function T(e){try{const t=await u.get(`${g}books/${e}`);return h(t)}catch(t){y(t)}}const k=document.querySelector(".all-categories"),B=document.querySelector(".book-category-list"),p=document.querySelector(".Books-best-sellers-text"),d=document.querySelector(".active-all-categories");d.classList.remove("inactive-all-categories");$().then(e=>{e.sort((t,n)=>t.list_name>n.list_name?1:-1).map(t=>{const{list_name:n}=t;return k.insertAdjacentHTML("beforeend",`<li><a class="list-category"href="">${n}</a></li>`)}).join("")}).catch(e=>console.log(e));k.addEventListener("click",x);function x(e){e.preventDefault(),console.log(e.target.textContent);const t=e.target.textContent;if(t==="All categories"){d.classList.remove("inactive-all-categories"),d.classList.add("active-all-categories"),p.innerHTML="Best Sellers";const n=" Books";let a=document.createElement("span");a.classList.add("Books-best-sellers-text-span"),a.textContent=n,p.appendChild(a),C().then(s=>{const o=document.querySelector(".book-category-list");s.forEach(l=>{const c=document.createElement("h3");c.textContent=`${l.list_name}`.toUpperCase(),c.className="bs-h3";const r=document.createElement("ul");r.className="bs-book-list",l.books.forEach(m=>{const E=document.createElement("li");E.className="bs-book-item",E.innerHTML=`
          <img class="bs-book-image" src="${m.book_image}" alt="${m.title}"" />
          <p class="title-book">${m.title}</p>
          <p class="author-book">${m.author}</p>
        `,r.appendChild(E)}),o.appendChild(c),o.appendChild(r);const i=document.createElement("button");i.type="button",i.classList.add("bs-buttom");const b=document.createElement("span");b.textContent="See More",b.classList.add("bs-buttom-name"),i.appendChild(b),o.appendChild(i)})}).catch(s=>console.error("Error fetching data:",s))}else{d.classList.remove("active-all-categories"),d.classList.add("inactive-all-categories");const a=t.split(" ").slice(0,-1),s=t.split(" ").pop();p.innerHTML=a.join(" ");let o=document.createElement("span");o.classList.add("Books-best-sellers-text-span"),o.textContent=` ${s}`,p.appendChild(o)}t&&L(t).then(n=>{const a=n.map(({book_image:s,title:o,author:l,_id:c})=>`<li id="${c}" class="bs-book-item">
      <img class="bs-book-image" src="${s}" alt="${o}" />
      <p class="title-book">${o}</p>
      <p class="author-book">${l}</p>
    </li>`).join("");return B.innerHTML=a}).catch(n=>console.log(n))}function v(e){const t=document.getElementById("myModal"),n=document.getElementById("modalImage"),a=document.getElementById("modalTitle"),s=document.getElementById("modalAuthor"),o=document.getElementById("modalDescription");document.getElementById("modal-button"),document.getElementById("bs-book-item"),t.style.display="block",n.src=`${e.image}`,a.textContent=`${e.title}`,s.textContent=`${e.author}`,o.textContent=`${e.description}`;const l=document.getElementsByClassName("close")[0];l.onclick=function(){t.style.display="none"},window.onclick=function(c){c.target===t&&(t.style.display="none")}}C().then(e=>{const t=document.querySelector(".book-category-list");e.forEach(n=>{const a=document.createElement("h3");a.textContent=`${n.list_name}`.toUpperCase(),a.className="bs-h3";const s=document.createElement("ul");s.className="bs-book-list",n.books.forEach(c=>{const r=document.createElement("li");r.className="bs-book-item";const i={title:c.title,author:c.author,image:c.book_image,description:c.description};r.innerHTML=`
          <img src="${c.book_image}" alt="${c.title}" />
          <p class="title-book">${c.title}</p>
          <p class="author-book">${c.author}</p>
        `,s.appendChild(r),r.addEventListener("click",()=>{v(i)})}),t.appendChild(a),t.appendChild(s);const o=document.createElement("button");o.type="button",o.classList.add("bs-buttom");const l=document.createElement("span");l.textContent="See More",l.classList.add("bs-buttom-name"),o.appendChild(l),t.appendChild(o)})}).catch(e=>console.error("Error fetching data:",e));const f=document.querySelector(".scroll-btn");window.onscroll=function(){w()};function w(){document.body.scrollTop>100||document.documentElement.scrollTop>100?f.style.display="block":f.style.display="none"}f.addEventListener("click",function(){M()});function M(){document.body.scrollTop=0,document.documentElement.scrollTop=0}T().then(e=>{const t=document.querySelector(".book-category-list");e.forEach(n=>{const a=document.createElement("ul");a.className="filtered-list",n.books.forEach(s=>{const o=document.createElement("li");o.className="filtered-item",o.innerHTML=`
          <img src="${s.book_image}" alt="${s.title}" />
          <p class="filt-title">${s.title}</p>
          <p class="filt-author">${s.author}</p>
        `,a.appendChild(o)}),t.appendChild(categoryTitle),t.appendChild(a)})}).catch(e=>console.error("Error fetching data:",e));
//# sourceMappingURL=commonHelpers.js.map
