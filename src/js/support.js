
const charities = [
    {
      title: 'Save the Children',
      url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      img: '../img/support/save-children.png', 
    },
    {
      title: 'Project HOPE',
      url: 'https://www.projecthope.org/country/ukraine/',
      img: '../img/support/hope.png',
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: '../img/support/united24.png',
      },
      {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: '../img/support/international.png',
      },
      {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: '../img/support/medecins.png',
      },
      {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: '../img/support/razom.png',
      },
      {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: '../img/support/action.png',
      },
      {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: '../img/support/world-vision.png',
      },
      {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: '../img/support/prytula.png',
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

   
    const logoImg = document.createElement('img');
    logoImg.classList.add('charity-logo');
    logoImg.src = charity.img;
    logoImg.alt = charity.title;

    const numberSpan = document.createElement('span');
    numberSpan.classList.add('charity-number');
    numberSpan.textContent = (index + 1).toString().padStart(2, '0');

    charityLink.appendChild(numberSpan);
    charityLink.appendChild(logoImg);
    listItem.appendChild(charityLink);
    charityList.appendChild(listItem);
  });

  charityListContainer.appendChild(charityList);
  
  charitySection.appendChild(charityListContainer);

  const containerHeight = 292;
  charityListContainer.style.height = `${containerHeight}px`;

  const supportButton = document.createElement('button');
  supportButton.classList.add('support-button');

  const arrowIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  arrowIcon.classList.add('arrow-icon');

  const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useElement.setAttribute('href', '../css/sprite.svg#support-icon'); 
    arrowIcon.appendChild(useElement);

    supportButton.appendChild(arrowIcon);
    charitySection.appendChild(supportButton);

    supportButton.addEventListener('click', () => {
        charityListContainer.classList.toggle('showing-items-4-9');

        arrowIcon.classList.toggle('arrow-rotate', charityListContainer.classList.contains('showing-items-4-9'));

        if (charityListContainer.classList.contains('showing-items-4-9')) 
        {
            charityListContainer.scrollTop = containerHeight;
        } else {
            charityListContainer.scrollTop = 0;
        }
    });
}


renderCharities();