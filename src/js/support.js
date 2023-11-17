function getImageUrl(name) {
    const url = new URL(import.meta.url);
    url.pathname = `../img/support/${name}.png`;
    return url.href;
}


const charities = [
    {
      title: 'Save the Children',
      url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      img: getImageUrl('save-children@2x'), 
      width: '131px',
    },
    {
      title: 'Project HOPE',
      url: 'https://www.projecthope.org/country/ukraine/',
      img: getImageUrl('hope@2x'),
      width: '62px',
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: getImageUrl('international@2x'),
        width: '101px',
      },
      {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: getImageUrl('razom@2x'),
        width: '82px',
      },
      {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img:   getImageUrl('action@2x'),
        width: '55px',
      },
      {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: getImageUrl('prytula@2x'),
        width: '115px',
      },
      {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: getImageUrl('medecins@2x'),
        width: '102px',
      },
      {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: getImageUrl('world-vision@2x'),
        width: '81px',
      },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: getImageUrl('united24@2x'),
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

        const supportIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        supportIcon.classList.add('support-icon');

        const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        useElement.setAttribute('href', '/css/sprite.svg#support-icon');
        supportIcon.appendChild(useElement);

        supportButton.appendChild(supportIcon);
        charitySection.appendChild(supportButton);

        supportButton.addEventListener('click', () => {
            charityListContainer.classList.toggle('showing-items-4-9');

            supportIcon.classList.toggle('arrow-rotate', charityListContainer.classList.contains('showing-items-4-9'));

            if (charityListContainer.classList.contains('showing-items-4-9')) {
                charityListContainer.scrollTop = containerHeight;
            } else {
                charityListContainer.scrollTop = 0;
            }
        });

       
}

renderCharities();
