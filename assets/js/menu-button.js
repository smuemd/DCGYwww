$(document).ready(function () {
  var menuActive = false;

  $('.Navigation-link--openMenu, .Navigation-link--closeMenu').click(function () {
    $(':root').toggleClass('menuIsActive');
    menuActive = menuActive ? false : true;
    console.log(menuActive);
  });

  // $(".Navigation-link--closeMenu").click(function () {
  //     $(":root").toggleClass('menuIsActive');
  //     menuActive = false;
  //     console.log("mA = false");
  // });

  $(document).on('click', function(event) {
    console.log($(event.target).closest('.Menu, .Navigation'));
    if (menuActive && $(event.target).closest('.Menu, .Navigation').length === 0) {
      $(":root").toggleClass('menuIsActive');
      menuActive = false;
  }
});

});

//if (!event.target.matches('.dropbtn'))
// var body = document.body,
//     overlay = document.querySelector('.overlay'),
//     overlayBtts = document.querySelectorAll('button[class$="overlay"]');
//
// [].forEach.call(overlayBtts, function(btt) {
//
//   btt.addEventListener('click', function() {
//
//      /* Detect the button class name */
//      var overlayOpen = this.className === 'open-overlay';
//
//      /* Toggle the aria-hidden state on the overlay and the
//         no-scroll class on the body */
//      overlay.setAttribute('aria-hidden', !overlayOpen);
//      body.classList.toggle('noscroll', overlayOpen);
//
//      /* On some mobile browser when the overlay was previously
//         opened and scrolled, if you open it again it doesn't
//         reset its scrollTop property */
//      overlay.scrollTop = 0;
//
//   }, false);
//
// });
