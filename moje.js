/* var button = document.getElementById('Więcej_informacji');

button.addEventListener('click', openText_1);

function openText_1(){

    if(tekst.style.display== 'block')
    {
        tekst.style.display= 'none'
    }
    else{
        tekst.style.display= 'block'; 
    }

}
*/
$(document).ready(function(){
    $("#Więcej_informacji").click(function(){
        $("#tekst").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#przycisk1").click(function(){
        $("#lista").slideToggle("slow");
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