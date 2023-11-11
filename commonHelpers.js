import"./assets/support-35a9e972.js";const s="https://books-backend.p.goit.global/";function l(){return fetch(`${s}books/top-books`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}l().then(t=>{const o=document.querySelector(".book-category-list");t.forEach(r=>{const c=document.createElement("h3");c.textContent=`Category - ${r.list_name}`.toUpperCase();const a=document.createElement("ul");r.books.forEach(e=>{const i=document.createElement("li");i.innerHTML=`
          <img src="${e.book_image}" alt="${e.title}" width="180px" height="256px" />
          <p>${e.title}</p>
          <p>${e.author}</p>
        `,a.appendChild(i)}),o.appendChild(c),o.appendChild(a);const n=document.createElement("button");n.type="button",n.textContent="See More",o.appendChild(n)})}).catch(t=>console.error("Error fetching data:",t));
//# sourceMappingURL=commonHelpers.js.map
