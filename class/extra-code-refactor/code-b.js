//------------------------ input button
var inputNum = document.querySelector('.input-group-field');
var currentValue = parseInt(inputNum.value);

// when plus is clicked, value increased
$('[data-quantity="plus"]').click(function(e){
  e.preventDefault(); // stop preventing it working as
  if (inputNum.value < 6 ) {
      $('#inputField').val(currentValue +=1); //keep add number when + is clicked
  } else {
      $('#inputField').val(currentValue = 1); //starting form 1
  }
});

// when minus is clicked, value decreased
$('[data-quantity="minus"]').click(function(e){
    e.preventDefault(); // stop preventing it working as
    if (inputNum.value > 1 ) {
        $('#inputField').val(currentValue += -1); //minus -1
    } else {
        $('#inputField').val(currentValue = 1);
    }
});
