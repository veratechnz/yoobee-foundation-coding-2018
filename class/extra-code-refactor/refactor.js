// code.js refactor
function animation (id, section, preventSetting) {

  $('#search').click(function(){
    if (preventSetting) {
      event.preventDefault();
    }
    $('html,body').animate({
      scrollTop: $('.secondSect').offset().top}, 1000);
  });

}

animation(argsGoHere);

// code-a.js re-factor
function pageTransition (whtBtn, pageA, pageB, pageC) {

  $(whtBtn + '-button').click(function() {
    $(pageA).fadeOut(function() {
      $(pageB).hide(function() {
        $(pageC).fadeIn();
      });
    });
  });

}

pageTransition(argsGoHere);

// code-b.js re-factor
function valueChange(plusMinus, valA, oneVal)  {

  var inputV = $('#inputField').val;

  // when plus is clicked, value increased
  $('[data-quantity=' + plusMinus + ']').click(function(e){
    e.preventDefault(); // stop preventing it working as
    if (inputNum.value < valA ) {
        inputV(currentValue += oneVal); //keep add number when + is clicked
    } else {
        inputV(currentValue = 1); //starting form 1
    }
  });

}

valueChange(argsGoHere);
