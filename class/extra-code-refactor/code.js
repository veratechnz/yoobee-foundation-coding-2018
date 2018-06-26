
$(document).ready(function() {

  $('#findAcc').click(function(){
    $('html,body').animate({
      scrollTop: $('.firstSect').offset().top}, 1000);
  });

  $('#search').click(function(){
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $('.secondSect').offset().top}, 1000);
  });

  $('#btnNxt').click(function(){
    $('html,body').animate({
      scrollTop: $('.thirdSect').offset().top}, 1000);
  });

  var accObj = {

    //DOM queries converted to variables//
    vars: {
      people: document.getElementById('people'),
      nights: [],
      checkin: document.getElementById('checkin'),
      checkout: document.getElementById('checkout'),
      breakfast: document.getElementById('breakPick'),
      lunch: document.getElementById('lunchPick'),
      dinner: document.getElementById('dinnerPick'),
      search: document.getElementById('search'),
      next: document.getElementById('btnNxt'),
      breakfastMenu: document.getElementById('breakfast'),
      lunchMenu: document.getElementById('lunch'),
      dinnerMenu: document.getElementById('dinner'),
      div: document.getElementsByClassName('divbx_accom--details'),
      divbx: document.getElementsByClassName('divbx'),
      divDets: document.getElementsByClassName('divDets'),
      guest: document.getElementById('guest'),
      guest1: document.getElementById('guest1'),
      guest2: document.getElementById('guest2'),
      guest3: document.getElementById('guest3'),
      stay: document.getElementById('stay'),
      stay1: document.getElementById('stay1'),
      stay2: document.getElementById('stay2'),
      stay3: document.getElementById('stay3'),
      rate: document.getElementById('rate'),
      rate1: document.getElementById('rate1'),
      rate2: document.getElementById('rate2'),
      rate3: document.getElementById('rate3'),
      h6: document.querySelectorAll('h6')
    },//vars object ENDS*//

    //Eventlistener to populate search criteria//
    eventlistener: function () {
        accObj.vars.search.addEventListener('click', function (){
          accObj.dayConverter();
          accObj.searchAcc();
          accObj.mealSelect();
          // console.dir(accObj.vars.div);
          // console.log(accObj.vars.divDets);
          // console.dir(accObj.vars.checkin.valueAsNumber);
          // console.dir(accObj.vars.checkout);
          // console.log(accObj.vars.nights.value);
          // console.log(accObj.vars.breakfast.checked);
          // console.log(accObj.vars.dinner);
          // console.log(accObj.vars.lunch);
          // console.dir(accObj.vars.breakfastMenu);
          // console.dir(accObj.vars.div[3]);
          // console.dir(accObj.vars.guest);
        }, false);
    }, //eventlistener method ENDS*//

    //Method to convert checkin date and checkout date to number of days//
    dayConverter: function () {
      var days = (accObj.vars.checkout.valueAsNumber - accObj.vars.checkin.valueAsNumber) / 86400000;
      accObj.vars.nights = days;
    }, //dayConverter method ENDS*//

    //searchAcc method//
    searchAcc: function () {
      if (parseInt(accObj.vars.people.value) === 1 && accObj.vars.nights <= 5) {
          //hotel//
          accObj.vars.h6[0].textContent = 'Hotel';
          accObj.vars.guest.textContent = dataObj.accom.hotel[0];
          accObj.vars.stay.textContent = dataObj.accom.hotel[1];
          accObj.vars.rate.textContent = dataObj.accom.hotel[2];
          //hostel//
          accObj.vars.h6[1].textContent = 'Hostel';
          accObj.vars.guest1.textContent = dataObj.accom.hostel[0];
          accObj.vars.stay1.textContent = dataObj.accom.hostel[1];
          accObj.vars.rate1.textContent = dataObj.accom.hostel[2];
          //house//
          accObj.vars.h6[2].textContent = 'House';
          accObj.vars.guest2.textContent = dataObj.accom.house[0];
          accObj.vars.stay2.textContent = dataObj.accom.house[1];
          accObj.vars.rate2.textContent = dataObj.accom.house[2];

          accObj.vars.div[0].style.width = '30%';
          accObj.vars.div[1].style.width = '30%';
          accObj.vars.div[2].style.width = '30%';
          accObj.vars.div[3].style.display = 'none';

      } else if (parseInt(accObj.vars.people.value) === 1 && accObj.vars.nights > 5) {
        //hostel//
        accObj.vars.h6[0].textContent = 'Hostel';
        accObj.vars.guest.textContent = dataObj.accom.hostel[0];
        accObj.vars.stay.textContent = dataObj.accom.hostel[1];
        accObj.vars.rate.textContent = dataObj.accom.hostel[2];
        //house//
        accObj.vars.h6[1].textContent = 'House';
        accObj.vars.guest1.textContent = dataObj.accom.house[0];
        accObj.vars.stay1.textContent = dataObj.accom.house[1];
        accObj.vars.rate1.textContent = dataObj.accom.house[2];

        accObj.vars.div[0].style.width = '45%';
        accObj.vars.div[1].style.width = '45%';
        accObj.vars.div[2].style.display = 'none';
        accObj.vars.div[3].style.display = 'none';

      } else if (parseInt(accObj.vars.people.value) === 2 && accObj.vars.nights < 3) {
        //hotel//
        accObj.vars.h6[0].textContent = 'Hotel';
        accObj.vars.guest.textContent = dataObj.accom.hotel[0];
        accObj.vars.stay.textContent = dataObj.accom.hotel[1];
        accObj.vars.rate.textContent = dataObj.accom.hotel[2];
        //hostel//
        accObj.vars.h6[1].textContent = 'Hostel';
        accObj.vars.guest1.textContent = dataObj.accom.hostel[0];
        accObj.vars.stay1.textContent = dataObj.accom.hostel[1];
        accObj.vars.rate1.textContent = dataObj.accom.hostel[2];
        //house//
        accObj.vars.h6[2].textContent = 'House';
        accObj.vars.guest2.textContent = dataObj.accom.house[0];
        accObj.vars.stay2.textContent = dataObj.accom.house[1];
        accObj.vars.rate2.textContent = dataObj.accom.house[2];

        accObj.vars.div[0].style.width = '30%';
        accObj.vars.div[1].style.width = '30%';
        accObj.vars.div[2].style.width = '30%';
        accObj.vars.div[3].style.display = 'none';

      } else if (parseInt(accObj.vars.people.value) === 2 && (accObj.vars.nights >= 3 && accObj.vars.nights <= 5)) {
        //hotel//
        accObj.vars.h6[0].textContent = 'Hotel';
        accObj.vars.guest.textContent = dataObj.accom.hotel[0];
        accObj.vars.stay.textContent = dataObj.accom.hotel[1];
        accObj.vars.rate.textContent = dataObj.accom.hotel[2];
        //hostel//
        accObj.vars.h6[1].textContent = 'Hostel';
        accObj.vars.guest1.textContent = dataObj.accom.hostel[0];
        accObj.vars.stay1.textContent = dataObj.accom.hostel[1];
        accObj.vars.rate1.textContent = dataObj.accom.hostel[2];
        //house//
        accObj.vars.h6[2].textContent = 'House';
        accObj.vars.guest2.textContent = dataObj.accom.house[0];
        accObj.vars.stay2.textContent = dataObj.accom.house[1];
        accObj.vars.rate2.textContent = dataObj.accom.house[2];
        //motel//
        accObj.vars.h6[3].textContent = 'Motel';
        accObj.vars.guest3.textContent = dataObj.accom.motel[0];
        accObj.vars.stay3.textContent = dataObj.accom.motel[1];
        accObj.vars.rate3.textContent = dataObj.accom.motel[2];

      } else if (parseInt(accObj.vars.people.value) === 2 && accObj.vars.nights > 5) {
        //hostel//
        accObj.vars.h6[0].textContent = 'Hostel';
        accObj.vars.guest.textContent = dataObj.accom.hostel[0];
        accObj.vars.stay.textContent = dataObj.accom.hostel[1];
        accObj.vars.rate.textContent = dataObj.accom.hostel[2];
        //house//
        accObj.vars.h6[1].textContent = 'House';
        accObj.vars.guest1.textContent = dataObj.accom.house[0];
        accObj.vars.stay1.textContent = dataObj.accom.house[1];
        accObj.vars.rate1.textContent = dataObj.accom.house[2];
        //motel//
        accObj.vars.h6[2].textContent = 'Motel';
        accObj.vars.guest2.textContent = dataObj.accom.motel[0];
        accObj.vars.stay2.textContent = dataObj.accom.motel[1];
        accObj.vars.rate2.textContent = dataObj.accom.motel[2];

        accObj.vars.div[0].style.width = '30%';
        accObj.vars.div[1].style.width = '30%';
        accObj.vars.div[2].style.width = '30%';
        accObj.vars.div[3].style.display = 'none';

      } else if (parseInt(accObj.vars.people.value) === 3 && accObj.vars.nights <= 2) {
        //hostel//
        accObj.vars.h6[0].textContent = 'Hostel';
        accObj.vars.guest.textContent = dataObj.accom.hostel[0];
        accObj.vars.stay.textContent = dataObj.accom.hostel[1];
        accObj.vars.rate.textContent = dataObj.accom.hostel[2];
        //house//
        accObj.vars.h6[1].textContent = 'House';
        accObj.vars.guest1.textContent = dataObj.accom.house[0];
        accObj.vars.stay1.textContent = dataObj.accom.house[1];
        accObj.vars.rate1.textContent = dataObj.accom.house[2];

        accObj.vars.div[0].style.width = '45%';
        accObj.vars.div[1].style.width = '45%';
        accObj.vars.div[2].style.display = 'none';
        accObj.vars.div[3].style.display = 'none';

      } else if (parseInt(accObj.vars.people.value) === 4 && accObj.vars.nights <= 2) {
        //hostel//
        accObj.vars.h6[0].textContent = 'Hostel';
        accObj.vars.guest.textContent = dataObj.accom.hostel[0];
        accObj.vars.stay.textContent = dataObj.accom.hostel[1];
        accObj.vars.rate.textContent = dataObj.accom.hostel[2];
        //house//
        accObj.vars.h6[1].textContent = 'House';
        accObj.vars.guest1.textContent = dataObj.accom.house[0];
        accObj.vars.stay1.textContent = dataObj.accom.house[1];
        accObj.vars.rate1.textContent = dataObj.accom.house[2];

        accObj.vars.div[0].style.width = '45%';
        accObj.vars.div[1].style.width = '45%';
        accObj.vars.div[2].style.display = 'none';
        accObj.vars.div[3].style.display = 'none';

      } else if (parseInt(accObj.vars.people.value) === 3 && accObj.vars.nights >= 3){
        console.log(parseInt(accObj.vars.people.value));
        //hostel//
        accObj.vars.h6[0].textContent = 'Hostel';
        accObj.vars.guest.textContent = dataObj.accom.hostel[0];
        accObj.vars.stay.textContent = dataObj.accom.hostel[1];
        accObj.vars.rate.textContent = dataObj.accom.hostel[2];
        //house//
        accObj.vars.h6[1].textContent = 'House';
        accObj.vars.guest1.textContent = dataObj.accom.house[0];
        accObj.vars.stay1.textContent = dataObj.accom.house[1];
        accObj.vars.rate1.textContent = dataObj.accom.house[2];
        //motel//
        accObj.vars.h6[2].textContent = 'Motel';
        accObj.vars.guest2.textContent = dataObj.accom.motel[0];
        accObj.vars.stay2.textContent = dataObj.accom.motel[1];
        accObj.vars.rate2.textContent = dataObj.accom.motel[2];

        accObj.vars.div[0].style.width = '30%';
        accObj.vars.div[1].style.width = '30%';
        accObj.vars.div[2].style.width = '30%';
        accObj.vars.div[3].style.display = 'none';

      } else if (parseInt(accObj.vars.people.value) === 4 && accObj.vars.nights >= 3){
        console.log(parseInt(accObj.vars.people.value));
        //hostel//
        accObj.vars.h6[0].textContent = 'Hostel';
        accObj.vars.guest.textContent = dataObj.accom.hostel[0];
        accObj.vars.stay.textContent = dataObj.accom.hostel[1];
        accObj.vars.rate.textContent = dataObj.accom.hostel[2];
        //house//
        accObj.vars.h6[1].textContent = 'House';
        accObj.vars.guest1.textContent = dataObj.accom.house[0];
        accObj.vars.stay1.textContent = dataObj.accom.house[1];
        accObj.vars.rate1.textContent = dataObj.accom.house[2];
        //motel//
        accObj.vars.h6[2].textContent = 'Motel';
        accObj.vars.guest2.textContent = dataObj.accom.motel[0];
        accObj.vars.stay2.textContent = dataObj.accom.motel[1];
        accObj.vars.rate2.textContent = dataObj.accom.motel[2];

        accObj.vars.div[0].style.width = '30%';
        accObj.vars.div[1].style.width = '30%';
        accObj.vars.div[2].style.width = '30%';
        accObj.vars.div[3].style.display = 'none';

      } else if (parseInt(accObj.vars.people.value) === 5 && accObj.vars.nights <= 10){
        //hostel//
        accObj.vars.h6[0].textContent = 'Hostel';
        accObj.vars.guest.textContent = dataObj.accom.hostel[0];
        accObj.vars.stay.textContent = dataObj.accom.hostel[1];
        accObj.vars.rate.textContent = dataObj.accom.hostel[2];

        accObj.vars.divbx[0].style.width = '40vw';
        accObj.vars.divbx[0].style.paddingLeft = '10em';
        accObj.vars.div[0].style.width = '60%';
        accObj.vars.div[1].style.display = 'none';
        accObj.vars.div[2].style.display = 'none';
        accObj.vars.div[3].style.display = 'none';

      } else if (parseInt(accObj.vars.people.value) === 6 && accObj.vars.nights <= 10){
        //hostel//
        accObj.vars.h6[0].textContent = 'Hostel';
        accObj.vars.guest.textContent = dataObj.accom.hostel[0];
        accObj.vars.stay.textContent = dataObj.accom.hostel[1];
        accObj.vars.rate.textContent = dataObj.accom.hostel[2];

        accObj.vars.div[0].style.width = '60%';
        accObj.vars.div[1].style.display = 'none';
        accObj.vars.div[2].style.display = 'none';
        accObj.vars.div[3].style.display = 'none';

      } else {
        alert('Search Criteria not found, please adjust search criteria');
      }

    }, //searchAcc method ENDS*//

    //Meal selection method//
    mealSelect: function () {

      if (accObj.vars.breakfast.checked === true && accObj.vars.lunch.checked === true && accObj.vars.dinner.checked === true) {

          for (var a = 0; a < dataObj.meal.breakfast.length; a++) {
            var li1 = document.createElement('li');
            var text1 = document.createTextNode(dataObj.meal.breakfast[a]);
            li1.appendChild(text1);
            accObj.vars.breakfastMenu.appendChild(li1);
          }
          for (var b = 0; b < dataObj.meal.lunch.length; b++) {
            var li2 = document.createElement('li');
            var text2 = document.createTextNode(dataObj.meal.lunch[b]);
            li2.appendChild(text2);
            accObj.vars.lunchMenu.appendChild(li2);
          }
          for (var c = 0; c < dataObj.meal.dinner.length; c++) {
            var li3 = document.createElement('li');
            var text3 = document.createTextNode(dataObj.meal.dinner[c]);
            li3.appendChild(text3);
            accObj.vars.dinnerMenu.appendChild(li3);
          }
      } else if (accObj.vars.breakfast.checked === true && accObj.vars.lunch.checked === true) {

          for (var d = 0; d < dataObj.meal.breakfast.length; d++) {
            var li4 = document.createElement('li');
            var text4 = document.createTextNode(dataObj.meal.breakfast[d]);
            li4.appendChild(text4);
            accObj.vars.breakfastMenu.appendChild(li4);
          }
          for (var e = 0; e < dataObj.meal.lunch.length; e++) {
            var li5 = document.createElement('li');
            var text5 = document.createTextNode(dataObj.meal.lunch[e]);
            li5.appendChild(text5);
            accObj.vars.lunchMenu.appendChild(li5);
          }
      } else if (accObj.vars.breakfast.checked === true && accObj.vars.dinner.checked === true) {

        for (var f = 0; f < dataObj.meal.breakfast.length; f++) {
          var li6 = document.createElement('li');
          var text6 = document.createTextNode(dataObj.meal.breakfast[f]);
          li6.appendChild(text6);
          accObj.vars.breakfastMenu.appendChild(li6);
        }
        for (var g = 0; g < dataObj.meal.dinner.length; g++) {
          var li7 = document.createElement('li');
          var text7 = document.createTextNode(dataObj.meal.dinner[g]);
          li7.appendChild(text7);
          accObj.vars.dinnerMenu.appendChild(li7);
        }
      } else if (accObj.vars.lunch.checked === true && accObj.vars.dinner.checked === true ) {

        for (var h = 0; h < dataObj.meal.lunch.length; h++) {
          var li8 = document.createElement('li');
          var text8 = document.createTextNode(dataObj.meal.lunch[h]);
          li8.appendChild(text8);
          accObj.vars.lunchMenu.appendChild(li8);
        }
        for (var i = 0; i < dataObj.meal.dinner.length; i++) {
          var li9 = document.createElement('li');
          var text9 = document.createTextNode(dataObj.meal.dinner[i]);
          li9.appendChild(text9);
          accObj.vars.dinnerMenu.appendChild(li9);
        }
      } else if (accObj.vars.breakfast.checked === true) {

        for (var j = 0; j < dataObj.meal.breakfast.length; j++) {
          var li10 = document.createElement('li');
          var text10 = document.createTextNode(dataObj.meal.breakfast[j]);
          li10.appendChild(text10);
          accObj.vars.breakfastMenu.appendChild(li10);
        }
      } else if (accObj.vars.lunch.checked === true) {

        for (var k = 0; k < dataObj.meal.lunch.length; k++) {
          var li11 = document.createElement('li');
          var text11 = document.createTextNode(dataObj.meal.lunch[k]);
          li11.appendChild(text11);
          accObj.vars.lunchMenu.appendChild(li11);
        }
      } else if (accObj.vars.dinner.checked === true) {

        for (var l = 0; l < dataObj.meal.dinner.length; l++) {
          var li12 = document.createElement('li');
          var text12 = document.createTextNode(dataObj.meal.dinner[l]);
          li12.appendChild(text12);
          accObj.vars.dinnerMenu.appendChild(li12);
        }
      }
    }//mealSelect Method ENDS*//
  };

  accObj.eventlistener();
});
