//---------NavContainer-----------
const navToggleBars = document.querySelector('.navToggleBars');
const navToggleClose = document.querySelector('.navToggleClose');
const navMenu = document.querySelector('.navMenu');
const navLinks = document.querySelector('.navLinks');

navToggleBars.addEventListener('click', () => {
  navMenu.classList.add('active');
  navToggleBars.classList.add('aactive');
  navToggleClose.classList.add('nactive');
});

const closenavAndbars = () => {
  navMenu.classList.remove('active');
  navToggleBars.classList.remove('aactive');
  navToggleClose.classList.remove('nactive');
};

navToggleClose.addEventListener('click', closenavAndbars);
navMenu.addEventListener('click', closenavAndbars);


//-------Collections-----------
const todayPrice = document.querySelector('#today--price');
const todaypricePart = document.querySelector('.todayprice--part');
const yesterdayPrice = document.querySelector('#yesterday--price');
const yesterpricePart = document.querySelector('.yesterprice---part');
const displaytodayPic = document.querySelector('#displaytodayPic');
const displayyesterPic = document.querySelector('#displayyesterPic');

const imgDisplay = (para) => {
  if(window.innerWidth < 780) {
    displaytodayPic.src = para;
    todayPrice.classList.add('activeCollection');
    yesterdayPrice.classList.add('activeCollection');
    todaypricePart.style.display = 'block';
    yesterpricePart.style.display = 'block';
    return
  } else if(window.innerWidth >= 780) {
     displaytodayPic.src = para;
     todayPrice.classList.add('activeCollection');
     yesterdayPrice.classList.remove('activeCollection');
     todaypricePart.style.display = 'block';
     yesterpricePart.style.display = 'none';
    return
  }
}

const imgDisplayYester = (para) => {
  if (window.innerWidth < 780) {
  displayyesterPic.src = para;
  todayPrice.classList.add('activeCollection');
  yesterdayPrice.classList.add('activeCollection');
  todaypricePart.style.display = 'block';
  yesterpricePart.style.display = 'block';
  return
  } else if (window.innerWidth >= 780) {
    displayyesterPic.src = para;
    todayPrice.classList.remove('activeCollection');
    yesterdayPrice.classList.add('activeCollection');
    todaypricePart.style.display = 'none';
    yesterpricePart.style.display = 'block';
    return
  }
}
