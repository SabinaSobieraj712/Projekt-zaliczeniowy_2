

var modal = document.getElementById('simpleModal');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

var modalBtnFoto_1 = document.getElementById('modalBtnFoto_1');
var modalBtnFoto_2 = document.getElementById('modalBtnFoto_2');
var modalBtnFoto_3 = document.getElementById('modalBtnFoto_3');
var modalBtnFoto_4 = document.getElementById('modalBtnFoto_4');
var modalBtnFoto_5 = document.getElementById('modalBtnFoto_5');
var modalBtnFoto_6 = document.getElementById('modalBtnFoto_6');
var modalBtnFoto_7 = document.getElementById('modalBtnFoto_7');
var modalBtnFoto_8 = document.getElementById('modalBtnFoto_8');

modalBtnFoto_1.addEventListener('click', openModal_1);
modalBtnFoto_2.addEventListener('click', openModal_2);
modalBtnFoto_3.addEventListener('click', openModal_3);
modalBtnFoto_4.addEventListener('click', openModal_4);
modalBtnFoto_5.addEventListener('click', openModal_5);
modalBtnFoto_6.addEventListener('click', openModal_6);
modalBtnFoto_7.addEventListener('click', openModal_7);
modalBtnFoto_8.addEventListener('click', openModal_8);


closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal_1(){
    modal.style.display = 'block';
    document.getElementById("modalFoto").src = "img/widok.jpg";
}
function openModal_2(){
    modal.style.display = 'block';
    document.getElementById("modalFoto").src = "img/widok_2.jpg";
}
function openModal_3(){
    modal.style.display = 'block';
    document.getElementById("modalFoto").src = "img/widok_3.jpg";
}
function openModal_4(){
    modal.style.display = 'block';
    document.getElementById("modalFoto").src = "img/widok_4.jpg";
}
function openModal_5(){
    modal.style.display = 'block';
    document.getElementById("modalFoto").src = "img/widok_5.jpg";
}
function openModal_6(){
    modal.style.display = 'block';
    document.getElementById("modalFoto").src = "img/widok_6.jpg";
}
function openModal_7(){
    modal.style.display = 'block';
    document.getElementById("modalFoto").src = "img/widok_7.jpg";
}
function openModal_8(){
    modal.style.display = 'block';
    document.getElementById("modalFoto").src = "img/widok_8.jpg";
}

function closeModal(){
    modal.style.display = 'none';
}

function outsideClick(e){
    if(e.target == modal){
      modal.style.display = 'none';
    }
}

/* Sekcja Slider z uzyciem JQuery */
'use strict';

$(function() {

    var width = 720; /* wielkosc slajdow */
    var seppedOfOurAnimation = 3000; /* predkosc naszej animacji slajdow, predkosc przesuwania */
    var pause = 3000;/* przerwa pomiedzy przesunieciami */
    var firstSlide = 1;

    //Referencje do elementow slider z czesci HTML zawierajacy slajdy
    var $slider = $('#slider');/* dzieki temu przeszukujey HTML raz i tu mamy info o slajdach */
    var $slideContainer = $('.slides', $slider);/* kontener zawierajacy slajdy */
    var $slides = $('.slide', $slider);/* lista wszystkich slajdow z kontenera */

    var interval;/* interwal start stop slider na klikniecie mysza */

    function startSlider() { /* start sto interwalu slidera */
        interval = setInterval(function() {
            /* tu nastepuje animacja przesowania */
            $slideContainer.animate({'margin-left': '-='+width}, seppedOfOurAnimation, function() {
                if (++firstSlide === $slides.length) {/* tu nastepuje sprawdzenie(funkcja) ktora mowi nam na ktorym slajdzie jestesmy i reset */
                    firstSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);/* czysci interwal */
    }

    $slideContainer /* zatrzymanie slidera jak na niego klikniemy i jak zjedziemy myszka pojedzie dalej */
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider(); /* wywolanie funkcji przesuwania slidera */


});


$(document).ready(function () {
  $('ul#navigation li').hover(function() {
      $(this).find('.subnav').animate({opacity: 1.0, height: 'toggle'}, 500);
      
  }, function() {
      $(this).find('.subnav').animate({opacity: 0, height: 'toggle'}, 500);
  });
}); 

   $(document).ready(function () {
  $("#back-to-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 500); 
  });

  var offset = 220;
  var duration = 500;

  $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
          $('#back-to-top').fadeIn();
      } else {
          $('#back-to-top').fadeOut();
      }
  });
});

/* Zegar */

function startTime() {
  var today = new Date();
  var godziny = today.getHours();
  var minuty = today.getMinutes();
  var sekundy = today.getSeconds();
  minuty = checkTime(minuty);
  sekundy = checkTime(sekundy);
  document.getElementById('zegar').innerHTML =
  godziny + ":" + minuty + ":" + sekundy;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // dodaj 0 kiedy < 10
  return i;
}