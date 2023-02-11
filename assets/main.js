
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  //dark mode 

  document.querySelector('#btn').addEventListener('click', () => {
      document.body.classList.toggle("dark-mode");
  })

  //cookies popup 

  const cookieWrap = document.querySelector('.cookies__wrapper'),
    buttons = document.querySelectorAll ('.cookie__button')

  function execCode () {
    if (document.cookie.includes('technews')) return; //faz a function parar se tiver incluso o cookie
    cookieWrap.classList.add('show');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        cookieWrap.classList.remove('show');
        if(button.id == "acceptBtn") {
          //cookies para 1 dia. 
          document.cookie = "cookieBy= technews; max-age=" + 60 * 60 * 24 * 1;
        }
      })
    })
  }
  
  window.addEventListener('load', execCode);

  //menu mobile

  let menuBtn = document.querySelector('.nav__menu-hamb');
  let navList = document.querySelector('.nav__lista');

  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
  })