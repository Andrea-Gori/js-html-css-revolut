 $(document).ready(function () {
    appari();
    scompari();
    big();


})

/* Functions */


function appari() {
    $('.width-dropdown-menu').mouseenter(function () {
        $(this).children('.dropdown-menu').removeClass('none')
    })
}

function scompari() {
  $('.width-dropdown-menu').mouseleave(function () {
      $('.dropdown-menu').addClass('none')
  })
}

function big() {
  $('.width-dropdown-menu').mouseenter(function (){
    if ($(this).children('.dropdown-menu').hasClass('big')) {
      $(this).children('.dropdown-menu').css('left', '-120px');
    }else {
      $(this).children('.dropdown-menu').css('left', '-25px');
    }
  })
}



