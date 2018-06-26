$('#animsition-mainpage').animsition();

// -------------------
// Animsition through pages
// -------------------

  //Main page to page 2
  $('.here-button').click(function() {
    $('#mainpage-div').fadeOut(function() {
      $('#mainpage-div').hide(function() {
        $('#page2-div').fadeIn();
      });
    });
  });

  // Page 2 to page 3
  $('.v-button').click(function() {
    $('#page2-div').fadeOut(function() {
      $('#page2-div').hide(function() {
        $('#page3-div').fadeIn();
      });
    });
  });

  // Page 3 to page 4
  $('.ph-button').click(function() {
    $('#page3-div').fadeOut(function() {
      $('#page3-div').hide(function() {
        $('#page4-div').fadeIn();
      });
    });
  });

  // Page 4 to page 5
  $('.m-button').click(function() {
    $('#page4-div').fadeOut(function() {
      $('#page4-div').hide(function() {
        $('#page5-div').fadeIn();
      });
    });
  });

// -------------------
//    Back button
// -------------------

  // Back from page 2 to main
  $('.v-backbutton-wrapper').click(function(){
    $('#page2-div').fadeOut(function(){
      $('#page2-div').hide(function(){
        $('#mainpage-div').fadeIn();
      });
    });
  });

  //Back from page 3 to page 2
  $('.ph-backbutton-wrapper').click(function(){
    $('#page3-div').fadeOut(function(){
      $('#page3-div').hide(function(){
        $('#page2-div').fadeIn();
      });
    });
  });

  //Back from page 4 to page 3
  $('.m-backbutton-wrapper').click(function(){
    $('#page4-div').fadeOut(function(){
      $('#page4-div').hide(function(){
        $('#page3-div').fadeIn();
      });
    });
  });

  //Back from page 5 to page 4
  $('.c-backbutton-wrapper').click(function(){
    $('#page5-div').fadeOut(function(){
      $('#page5-div').hide(function(){
        $('#page4-div').fadeIn();
      });
    });
  });

// -------------------
// PLUS MINUS FUNCTION
// -------------------

  // PARTY SIZE

  // This button will increment the value
  $('.ps-plus').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name='+fieldName+']').val());
      // If is not undefined
      if (!isNaN(currentVal)) {
          // Increment
          $('input[name='+fieldName+']').val(currentVal + 1);
      } else {
          // Otherwise put a 0 there
          $('input[name='+fieldName+']').val(0);
      }
  });
  // This button will decrement the value till 0
  $(".ps-minus").click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name='+fieldName+']').val());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 0) {
          // Decrement one
          $('input[name='+fieldName+']').val(currentVal - 1);
      } else {
          // Otherwise put a 0 there
          $('input[name='+fieldName+']').val(0);
      }
  });
