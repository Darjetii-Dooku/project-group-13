
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
  
    charities.forEach(charity => {
      
      const charityBlock = document.createElement('div');
      charityBlock.classList.add('charity-block');
  
      
      const logoImg = document.createElement('img');
      logoImg.classList.add('charity-logo');
      logoImg.src = charity.img; 
      logoImg.alt = charity.title;
  
      
      charityBlock.appendChild(logoImg);
  
      const titleLink = document.createElement('a');
      titleLink.href = charity.url;
      titleLink.textContent = charity.title;
      charityBlock.appendChild(titleLink);
  
      
      charitySection.appendChild(charityBlock);
    });
  }
  
 
  renderCharities();