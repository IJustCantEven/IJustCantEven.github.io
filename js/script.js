//-----------------------               Services Section                  --------------------------

const serviceTabs = document.querySelector('.services-buttons-bar');
const serviceTabsContent = document.querySelector('.service-descriptions');

const serviceTabsChildren = serviceTabs.children;
const serviceTabsLength = serviceTabsChildren.length;
const serviceTabsContentChildren = serviceTabsContent.children;


for (let counter = 0; counter < serviceTabsLength; counter++){
  serviceTabsChildren[counter].dataset.index = String(counter);
  if (counter !== 0) {
    serviceTabsContentChildren[counter].hidden = true;
  }
}

serviceTabs.addEventListener('click', ()=>{
  serviceTabs.querySelector('.active-service').classList.toggle('active-service');
  serviceTabsContent.querySelector('li:not([hidden])').hidden = true;
  event.target.classList.toggle('active-service');
  serviceTabsContentChildren[event.target.dataset.index].hidden = false;
});

//-----------------------               Pictures Section                  ---------------------------

const tabsContents = document.querySelectorAll('.pictures-section-image');
const loadMoreBtn = document.querySelector('.load-more');
const clickHandler = (event) => {
  const clickedTab = event.target;
  const activeTab = document.querySelectorAll('.active-picture-tab');

  //Due to the fact that the array is returning, if at least one tab is pressed - the length is bigger than 0, thus we delete the pressed

  if (activeTab.length > 0) activeTab[0].classList.remove('active-picture-tab');
  clickedTab.classList.add('active-picture-tab');
  for (let element of tabsContents) {
    element.classList.add('tab-hidden');
    if (clickedTab.dataset.category === 'all') {
      for (let counter = 0; counter < 12; counter++){
        // Removing the hidden class of the first 12 pics when on "All" tab
        tabsContents[counter].classList.remove('tab-hidden');
        loadMoreBtn.hidden = false;
      }
    }
    else if (element.dataset.category === clickedTab.dataset.category) {
      element.classList.remove('tab-hidden');
    }
    else if(clickedTab.dataset.category !== 'all'){
      loadMoreBtn.hidden = true;
    }
  }
};
document.querySelectorAll('.pictures-section-tab').forEach((tab)=>{
  tab.addEventListener('click', clickHandler);
});

loadMoreBtn.addEventListener('click',()=>{
  for (let counter = 0; counter < 36; counter++){
    // Removing the hidden class of the first 12 pics when on "All" tab
    tabsContents[counter].classList.remove('tab-hidden');
    loadMoreBtn.hidden = true;
  }
});

//-----------------------               Reviews Section                  ---------------------------

const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 36,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: 4, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  // clickable: true,
});
const galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 36,
  loop:true,
  loopedSlides: 4, //looped slides should be the same
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

