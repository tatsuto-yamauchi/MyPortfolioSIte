jQuery("#js-drawer-icon").on("click", function (e) {
    e.preventDefault();
    jQuery("#js-nav-icon2").removeClass("is-checked");
    jQuery("#js-nav-content2").removeClass("is-checked");
    jQuery("#js-nav-icon").removeClass("is-checked");
    jQuery("#js-nav-content").removeClass("is-checked");
    jQuery("#js-drawer-icon").toggleClass("is-checked");
    jQuery("#js-drawer-content").toggleClass("is-checked");
    
});

jQuery("#js-nav-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-nav-icon2").removeClass("is-checked");
  jQuery("#js-nav-content2").removeClass("is-checked");
  jQuery("#js-nav-icon0").removeClass("is-checked");
  jQuery("#js-nav-content0").removeClass("is-checked");
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
  jQuery("#js-nav-icon").addClass("is-checked");
  jQuery("#js-nav-content").addClass("is-checked");
});

jQuery("#js-nav-icon2").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-nav-icon").removeClass("is-checked");
  jQuery("#js-nav-content").removeClass("is-checked");
  jQuery("#js-nav-icon0").removeClass("is-checked");
  jQuery("#js-nav-content0").removeClass("is-checked");
  jQuery("#js-nav-icon2").addClass("is-checked");
  jQuery("#js-nav-content2").addClass("is-checked");
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

jQuery("#js-nav-icon0").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-nav-icon2").removeClass("is-checked");
  jQuery("#js-nav-content2").removeClass("is-checked");
  jQuery("#js-nav-icon").removeClass("is-checked");
  jQuery("#js-nav-content").removeClass("is-checked");
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
  jQuery("#js-nav-icon0").addClass("is-checked");
  jQuery("#js-nav-content0").addClass("is-checked");
});

let swiper, swiperbool;
const breakPoint = 768;

window.addEventListener('load', () => {
    console.log(window.innerWidth);
    // コンテンツが幅をじゃyましてる
 if (breakPoint > window.innerWidth) {
   swiperbool = false;
//    console.log(swiperbool);
 } else {
   createSwiper();
   swiperbool = true;
//    console.log(swiperbool);
 }
}, false);

 window.addEventListener('resize', () => {
 if (breakPoint > window.innerWidth && (swiperbool)) {
    console.log(swiperbool);

   swiper.destroy(false, true);
   swiperbool = false;
 } else if (breakPoint <= window.innerWidth && !(swiperbool)) {
    console.log(swiperbool);

   createSwiper();
   swiperbool = true;
 }
}, false);

function createSwiper(){
    swiper = new Swiper(".swiper",{
        centeredSlides: true,
        slidesPerView: 1,
    
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
    
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        keyboard: true, 
    
      });
}
