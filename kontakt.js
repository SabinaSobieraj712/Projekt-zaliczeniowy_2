$('form').submit(function(e){

    var fieldName = $('#name');
    var fieldEmail = $('#email');
    var fieldContent = $('#content');
    var error = '';

    function isEmpty(elem) {
      return elem.val() === '';
    }

    if (isEmpty(fieldName)) {
      $('.field-error-name').css('display', 'block');
      error += 'Required';
    } else {
      $('.field-error-name').css('display', 'none');
    }

    if (isEmpty(fieldEmail)) {
      $('.field-error-email').css('display', 'block');
      error += 'Required';
    } else {
      $('.field-error-email').css('display', 'none');
    }

    if (isEmpty(fieldContent)) {
      $('.field-error-content').css('display', 'block');
      error += 'Required';
    } else {
      $('.field-error-content').css('display', 'none');
    }

    if (error != '') {
        return false;
    } else {
       return true;
    }

  });

  /* Zegar */

function startTime() {
  var today = new Date();
  var godziny = today.getHours();
  var minuty = today.getMinutes();
  var sekundy = today.getSeconds();
  minuty = checkTime(minuty);
  sekundy = checkTime(sekundy);
  document.getElementById('zegarNew').innerHTML =
  godziny + ":" + minuty + ":" + sekundy;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // dodaj 0 kiedy < 10
  return i;
}