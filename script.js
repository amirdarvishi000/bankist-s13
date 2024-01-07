'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const navLink = document.querySelector('.nav__link');
const navLinks = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//selecting elements

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const buttonsByTag = document.getElementsByTagName('button');
const selectById = document.getElementById('section--1');
const sectionsByClass = document.getElementsByClassName('section');
const head = document.head;
const body = document.body;
console.log(buttonsByTag);
console.log(head);
console.log(body);
console.log(allSections);
console.log(selectById);
console.log(sectionsByClass);

// creating element

const message = document.createElement('div');
message.innerHTML =
  'we use cookie for improve functionality and analytics. <button class="btn btn--close--cookie">we got it!</button>';
header.insertAdjacentElement('beforebegin', message);
message.classList.add('cookie-message');
// remove element

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.parentElement.removeChild(message);
  });

// style

message.style.backgroundColor = '#37383d';
message.style.color = 'white';
message.style.width = '100%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');

logo.setAttribute('alt', 'here is to go');
logo.alt = 'here is to go 2';

logo.setAttribute('test', 'test');

console.log(logo.getAttribute('designer'));

console.log(message.style.height);

console.log(logo.src);
console.log(logo.getAttribute('src'));
console.log(logo.dataset.versionNumber);
logo.classList.toggle('a');
logo.classList.remove('a');
console.log(logo.classList.contains('a'));

const btnLearnMore = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnLearnMore.addEventListener('click', function (e) {
  console.log('test');
  console.log(btnLearnMore.getBoundingClientRect());
  console.log(e.target.getBoundingClientRect());
  console.log('current scroll x/y:', window.pageXOffset, window.pageYOffset);
  console.log(
    'height and width viewport:',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  section1.scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');
// const h1Alert = function () {
//   alert('hi babe');
//   h1.removeEventListener('mouseenter', h1Alert);
// };
// h1.addEventListener('mouseenter', h1Alert);

// const randInt = (min, max) => Math.floor(Math.random() * (max - min) + 1 + min);

// const randColor = () =>
// `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;

// we have two event in js in elements ,that is capturing and bubbling face
// capture happened when drill and bubbling when return to first element

// navLink.addEventListener('click', function (e) {
//   this.style.backgroundColor = randColor();
//   console.log('nav link', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);
//   // stop bubbling face
//   // e.stopPropagation();
// });

// navLinks.addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randColor();
//     console.log('nav links', e.target, e.currentTarget);
//     console.log(this === e.currentTarget);
//   },
//   true
// );

// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = randColor();
//   console.log('nav', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);
// });

// console.log(randColor());

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     console.log(id);
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    console.log(id);
  }
});

// going downwords : child

const h1 = document.querySelector('h1');
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.querySelectorAll('.highlight'));
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';
// console.log(h1);

// going upwords : parents

// console.log(h1.parentElement);
// console.log(h1.parentNode);

// h1.closest('.header').style.backgroundColor = 'orangered';
// h1.closest('h1').style.backgroundClip = 'red';

// going sideway : sibling
// console.log('sibling:');
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log('element sibling:');
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el === h1) {
//     el.style.color = 'blue';
//   }
// });

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('button');
  if (clicked) {
    console.log('test');

    //remove tab active
    tabs.forEach(el => el.classList.remove('operations__tab--active'));
    tabsContent.forEach(el =>
      el.classList.remove('operations__content--active')
    );
    // add tab active
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
    clicked.classList.add('operations__tab--active');
  }
});
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = nav.querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// window.addEventListener('scroll', function () {
//   const initialCoords = section1.getBoundingClientRect();
//   if (initialCoords.top < this.window.screenY) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
//   console.log(this.window.scrollY);
//   console.log(initialCoords);
// });

const stickyNav = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
    nav.style.top = 0;
  } else {
    nav.classList.remove('sticky');
    nav.classList.display = 'block';
  }
};
const navHeight = nav.getBoundingClientRect().height;
const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

observer.observe(header);
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  // document.getElementById(entry.target.id).classList.remove('section--hidden');
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
    sectionObserver.unobserve(entry.target);
  }
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//laze loading

const imgs = document.querySelectorAll('img[data-src]');
console.log(imgs);

const loadImg = function (entries, observer) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;
    observer.unobserve(entry.target);
  }
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};

const imgObserve = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgs.forEach(el => imgObserve.observe(el));

// slider

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

// slider.style.transform = 'scale(0.2) translateX(-1000px)';
// slider.style.overflow = 'visible';

const goToSlide = function (curSlide) {
  slides.forEach(
    (e, i) => (e.style.transform = `translateX(${(i - curSlide) * 100}%)`)
  );
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activeDot(curSlide);
};

const pervSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activeDot(curSlide);
};

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', pervSlide);

// transform slides

slides.forEach((e, i) => (e.style.transform = `translateX(${i * 100}%)`));

// right or left slider with keyboard

document.addEventListener('keydown', function (e) {
  // console.log(e);
  e.key === 'ArrowRight' && nextSlide();
  e.key === 'ArrowLeft' && pervSlide();
});

// create dots

const dotsContainer = document.querySelector('.dots');
console.log(dotsContainer);
const createDots = function () {
  slides.forEach(function (_, i) {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

// selecting dots

dotsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activeDot(slide);
  }
});
const init = function () {
  goToSlide(0);
  activeDot(0);
  
};
createDots();
// active dot
const activeDot = function (curSlide) {
  console.log(curSlide);
  document
    .querySelectorAll('.dots__dot')
    .forEach(el => el.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${curSlide}"]`)
    .classList.add('dots__dot--active');
};

init();
