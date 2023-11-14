(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const s={theme:document.querySelector("#theme-toggle"),body:document.querySelector("body"),header:document.querySelector("header"),bookshelfIcon:document.getElementById("bookshelf-icon")};s.theme.addEventListener("change",function(){s.header.classList.toggle("dark-theme",s.theme.checked),s.body.classList.toggle("dark-theme",s.theme.checked);const n=s.bookshelfIcon.querySelector("use");s.theme.checked?(n.setAttribute("href","/css/sprite.svg#icon-Bookshelf_white"),n.setAttribute("href","/css/sprite.svg#icon-align-left_white")):(n.setAttribute("href","/css/sprite.svg#icon-Bookshelf"),n.setAttribute("href","/css/sprite.svg#icon-align-left"))});function r(n){const i=new URL(import.meta.url);return i.pathname=`./img/support/${n}.png`,i.href}const w=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:r("save-children@2x"),width:"131px"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:r("hope@2x"),width:"62px"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:r("international@2x"),width:"101px"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:r("razom@2x"),width:"82px"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:r("action@2x"),width:"55px"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:r("prytula@2x"),width:"115px"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:r("medecins@2x"),width:"102px"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:r("world-vision@2x"),width:"81px"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:r("united24@2x"),width:"109px"}];function f(){const n=document.getElementById("charity-section"),i=document.createElement("div");i.classList.add("charity-list-container");const c=document.createElement("ul");c.classList.add("charity-list"),w.forEach((d,m)=>{const u=document.createElement("li");u.classList.add("charity-list-li");const h=document.createElement("a");h.classList.add("charity-link"),h.href=d.url;const l=document.createElement("img");l.classList.add("charity-logo"),l.src=d.img,l.alt=d.title,l.width=d.width;const g=window.devicePixelRatio||1;l.width=parseInt(d.width)*g;const p=document.createElement("span");p.classList.add("charity-number"),p.textContent=(m+1).toString().padStart(2,"0"),h.appendChild(p),h.appendChild(l),u.appendChild(h),c.appendChild(u)}),i.appendChild(c),n.appendChild(i);const a=292;i.style.height=`${a}px`;const e=document.createElement("button");e.classList.add("support-button");const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("arrow-icon"),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("width","22"),t.setAttribute("height","22"),t.setAttribute("viewBox","0 0 22 22"),t.setAttribute("fill","none");const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","M10.3488 12.2834C10.434 12.3694 10.5354 12.4376 10.6471 12.4841C10.7588 12.5306 10.8786 12.5546 10.9996 12.5546C11.1206 12.5546 11.2404 12.5306 11.3521 12.4841C11.4638 12.4376 11.5652 12.3694 11.6504 12.2834L15.8488 8.07594C15.934 7.99002 16.0354 7.92183 16.1471 7.87529C16.2588 7.82875 16.3786 7.80479 16.4996 7.80479C16.6206 7.80479 16.7404 7.82875 16.8521 7.87529C16.9638 7.92183 17.0652 7.99002 17.1504 8.07594C17.3212 8.24769 17.417 8.48002 17.417 8.72219C17.417 8.96436 17.3212 9.19669 17.1504 9.36844L12.9429 13.5759C12.4273 14.0909 11.7283 14.3802 10.9996 14.3802C10.2708 14.3802 9.57188 14.0909 9.05625 13.5759L4.84875 9.36844C4.6794 9.1977 4.58393 8.96725 4.58292 8.72677C4.58222 8.60613 4.60534 8.48654 4.65096 8.37486C4.69658 8.26318 4.76379 8.16159 4.84875 8.07594C4.93397 7.99002 5.03535 7.92183 5.14705 7.87529C5.25876 7.82875 5.37857 7.80479 5.49958 7.80479C5.62059 7.80479 5.74041 7.82875 5.85211 7.87529C5.96382 7.92183 6.0652 7.99002 6.15042 8.07594L10.3488 12.2834Z"),o.setAttribute("fill","#4F2EE8"),t.appendChild(o),e.appendChild(t),n.appendChild(e),e.addEventListener("click",()=>{i.classList.toggle("showing-items-4-9"),t.classList.toggle("arrow-rotate",i.classList.contains("showing-items-4-9")),i.classList.contains("showing-items-4-9")?i.scrollTop=a:i.scrollTop=0})}f();
//# sourceMappingURL=support-1a3bf38e.js.map