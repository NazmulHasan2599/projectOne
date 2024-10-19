//------------------ Header background-color change -----------------

function scrollHeader(){
    const header = document.getElementById('header');

if(this.scrollY > 50){
    header.classList.add('scroll__header')
}else{
    header.classList.remove('scroll__header')
    }
}
window.addEventListener('scroll', scrollHeader)

//-------------------- Modal Active -------------------------

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      closeBtn = document.querySelectorAll('.services__modal_close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('modal_active')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', ()=>{
        modal(i)
    })
})
closeBtn.forEach((mc)=>{
    modalViews.forEach((mv)=>{
        mc.addEventListener('click', ()=>{
            mv.classList.remove('modal_active')
        })
    })
})

// -----------------Mixitup filters-------------------

let mixerWorkPortfolio = mixitup(".work__container", {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

//------------------ Active work card---------------------

const linkWork = document.querySelectorAll('.work__item');

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active__work'))
    this.classList.add('active__work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

// -------------Swiper Testimonial-------------

let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grapCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
       576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
    },
  });


// ---------------  Scroll Active ----------------

const sections = document.querySelectorAll('section[id]'),
        navLinks = document.querySelectorAll('.nav__menu a');


window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY
        let offset = sec.offsetTop -58
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

      if(top >= offset && top <= offset + height){
        navLinks.forEach(links =>{
            links.classList.remove('active__link')
            document.querySelector('.nav__menu a[href*=' + id +']').classList.add('active__link')
        })
      }  
    })
}        

// ----------------- DArk Light Theme ------------------

const themeBtn = document.getElementById('theme-btn'),
        body = document.querySelector('body');

themeBtn.addEventListener('click', ()=>{
    body.classList.toggle('light__theme');

})









// const lightTheme = 'light__theme'
// const iconTheme = 'bx-sun'

// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// const getCurrentTheme = ()=> document.body.classList.contains(lightTheme)? 'dark' : 'light'
// const getCurrentIcon = ()=> themeBtn.classList.contains(iconTheme)? 'bx bx-moon' : 'bx bx-sun'

// if(selectedTheme){
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
//     themeBtn.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
// }

// themeBtn.addEventListener('click', ()=>{
//     document.body.classList.toggle(lightTheme)
//     themeBtn.classList.toggle(iconTheme)

//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })

// ------------ Scroll Reveal Animation -----------

const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400, 
    // reset: true,
});

sr().reveal('.home__data')
sr().reveal('.home__')



