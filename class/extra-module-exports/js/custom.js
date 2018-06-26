// Node Imports
var anime = require('animejs');
var greetings = require('./speak.js');

(function() {
  'use strict';

  console.log(anime);
  console.log(greetings);

  var cssSelector = anime({
    targets: 'h1',
    translateX: 250,
    duration: 4000
  });

  greetings.saySomething();



}());
