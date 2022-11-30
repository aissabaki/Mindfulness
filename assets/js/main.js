const myNav = document.getElementById('nav-bar');
const myNavLink = document.querySelectorAll('#navLink');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', function () {
  myNav.classList.add('show');
});
closeBtn.addEventListener('click', function () {
  myNav.classList.remove('show');
});
myNavLink.forEach((link) => {
  link.addEventListener('click', function () {
    myNav.classList.remove('show');
  });
});

/* animated numbers */

const skillNums = document.querySelectorAll('#skillnum');
const nums = document.querySelectorAll('#num');
const firstElement = document.querySelector('.statistic-card-1');
const secondElement = document.querySelector('.statistic-card-2');
const speed = 50;

function animateOnScroll(element, collection) {
  window.addEventListener('scroll', function () {
    if (window.scrollY >= element.offsetTop - 300) {
      counter(collection);
    }
  });
}

function counter(collection) {
  collection.forEach((num) => {
    const target = +num.getAttribute('data-target');
    let count = +num.innerText;
    function update() {
      if (count < target) {
        count ++;
        num.innerText = count;
        setTimeout(update, 1);
      } else {
        num.innerText = target;
      }
    }
    update();
  });
}

animateOnScroll(firstElement, skillNums);
animateOnScroll(secondElement, nums);

/* back to the top functionality */

const backBtn = document.getElementById('backToTop');
const firstSection = document.querySelector('#welcome');

window.addEventListener('scroll', function () {
  if (window.scrollY < firstSection.offsetTop) {
    backBtn.style.display = 'none';
  }
  if (window.scrollY >= firstSection.offsetTop) {
    backBtn.style.display = 'block';
  }
});

backBtn.addEventListener('click', function () {
  document.body.scrollIntoView({
    behavior: 'smooth',
  });
});


