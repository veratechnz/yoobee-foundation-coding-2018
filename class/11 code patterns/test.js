// This a program pattern using an object literal
var app = {

 // Our first example property
 propertyTest: 'Carmen Sandiego',

 // A config object within the app program/object
 // We can use this to add and store settings and array data
 config: {
   settingA: true,
   language: 'en',
   colorSchemeA: 'blue',
   colorSchemeB: 'red'
 },

 // init function
 init: function () {
   app.config.settingA = false;
   app.saySomething();
   app.varTest();
   console.log(this.config.settingA);
   // console.log(this);
 },

 // Our first program method or function
 // This logs something to console and uses the propertyTest propertyTest
 // for the output
 saySomething: function () {
   console.log('Where in the world is ' + app.propertyTest + ' today ?');
 },

 // A method that takes an argument - A method is just a function
 argumentMethod: function (updater) {
   // Here we assign the argument with app.config.colorSchemeA dot notation
   // It assigns updater as the new value to the config object
   app.config.colorSchemeA = updater;
   console.log(app);
 },

 // Within method/function scope you are free to use variables
 // As we can see with 'var thing' below
 varTest: function () {
   var thing = 'aaaaa';
   console.log(thing);
 }


}; // app object ENDS ***

// Here we access a method within a function

app.init();
