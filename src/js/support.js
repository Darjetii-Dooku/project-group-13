// function getImageUrl(name) {
//     const url = new URL(import.meta.url);
//     url.pathname = `./img/support/${name}.png`;
//     return url.href;
// }



import imgUrl1 from '../img/support/save-children@2x.png'
import imgUrl2 from '../img/support/hope@2x.png'
import imgUrl3 from '../img/support/international@2x.png'
import imgUrl4 from '../img/support/razom@2x.png'
import imgUrl5 from '../img/support/action@2x.png'
import imgUrl6 from '../img/support/prytula@2x.png'
import imgUrl7 from '../img/support/medecins@2x.png'
import imgUrl8 from '../img/support/world-vision@2x.png'
import imgUrl9 from '../img/support/united24@2x.png'

const charities = [
    {
      title: 'Save the Children',
      url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      img: imgUrl1, 
      width: '131px',
    },
    {
      title: 'Project HOPE',
      url: 'https://www.projecthope.org/country/ukraine/',
      img: imgUrl2,
      width: '62px',
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: imgUrl3,
        width: '101px',
      },
      {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: imgUrl4,
        width: '82px',
      },
      {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: imgUrl5,
        width: '55px',
      },
      {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: imgUrl6,
        width: '115px',
      },
      {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: imgUrl7,
        width: '102px',
      },
      {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: imgUrl8,
        width: '81px',
      },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: imgUrl9,
        width: '109px',
      },

  ];
  
    function renderCharities() {
    const charitySection = document.getElementById('charity-section');
   
    const charityListContainer = document.createElement('div');
    charityListContainer.classList.add('charity-list-container'); 
  
    const charityList = document.createElement('ul');
    charityList.classList.add('charity-list');

        charities.forEach((charity, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('charity-list-li');

            const charityLink = document.createElement('a');
            charityLink.classList.add('charity-link');
            charityLink.href = charity.url;

            const supportImg = document.createElement('img');
            supportImg.classList.add('charity-logo');
            supportImg.src = charity.img;
            supportImg.alt = charity.title;
            supportImg.width = charity.width;

            const pixelRatio = window.devicePixelRatio || 1;
            supportImg.width = parseInt(charity.width) * pixelRatio;

            const numberSpan = document.createElement('span');
            numberSpan.classList.add('charity-number');
            numberSpan.textContent = (index + 1).toString().padStart(2, '0');

            charityLink.appendChild(numberSpan);
            charityLink.appendChild(supportImg);
            listItem.appendChild(charityLink);
            charityList.appendChild(listItem);
        });

        charityListContainer.appendChild(charityList);

        charitySection.appendChild(charityListContainer);

        const containerHeight = 292;
        charityListContainer.style.height = `${containerHeight}px`;

        const supportButton = document.createElement('button');
        supportButton.classList.add('support-button');

        // const arrowIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        // arrowIcon.classList.add('arrow-icon');

        // const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        // useElement.setAttribute('href', '/css/sprite.svg#arrow-icon');
        // arrowIcon.appendChild(useElement);

        const arrowIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          arrowIcon.classList.add('arrow-icon');
          arrowIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
          arrowIcon.setAttribute('width', '22');
          arrowIcon.setAttribute('height', '22');
          arrowIcon.setAttribute('viewBox', '0 0 22 22');
          arrowIcon.setAttribute('fill', 'none');

          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', 'M10.3488 12.2834C10.434 12.3694 10.5354 12.4376 10.6471 12.4841C10.7588 12.5306 10.8786 12.5546 10.9996 12.5546C11.1206 12.5546 11.2404 12.5306 11.3521 12.4841C11.4638 12.4376 11.5652 12.3694 11.6504 12.2834L15.8488 8.07594C15.934 7.99002 16.0354 7.92183 16.1471 7.87529C16.2588 7.82875 16.3786 7.80479 16.4996 7.80479C16.6206 7.80479 16.7404 7.82875 16.8521 7.87529C16.9638 7.92183 17.0652 7.99002 17.1504 8.07594C17.3212 8.24769 17.417 8.48002 17.417 8.72219C17.417 8.96436 17.3212 9.19669 17.1504 9.36844L12.9429 13.5759C12.4273 14.0909 11.7283 14.3802 10.9996 14.3802C10.2708 14.3802 9.57188 14.0909 9.05625 13.5759L4.84875 9.36844C4.6794 9.1977 4.58393 8.96725 4.58292 8.72677C4.58222 8.60613 4.60534 8.48654 4.65096 8.37486C4.69658 8.26318 4.76379 8.16159 4.84875 8.07594C4.93397 7.99002 5.03535 7.92183 5.14705 7.87529C5.25876 7.82875 5.37857 7.80479 5.49958 7.80479C5.62059 7.80479 5.74041 7.82875 5.85211 7.87529C5.96382 7.92183 6.0652 7.99002 6.15042 8.07594L10.3488 12.2834Z'); 
          path.setAttribute('fill', '#4F2EE8');

        arrowIcon.appendChild(path); //note: delete this line if using icons from sprite.svg(code above)
        supportButton.appendChild(arrowIcon);
        charitySection.appendChild(supportButton);

        supportButton.addEventListener('click', () => {
            charityListContainer.classList.toggle('showing-items-4-9');

            arrowIcon.classList.toggle('arrow-rotate', charityListContainer.classList.contains('showing-items-4-9'));

            if (charityListContainer.classList.contains('showing-items-4-9')) {
                charityListContainer.scrollTop = containerHeight;
            } else {
                charityListContainer.scrollTop = 0;
            }
        });

       
}

renderCharities();
