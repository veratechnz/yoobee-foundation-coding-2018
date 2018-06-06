//Method 1.
var $div = $("<div>", {id: "foo", "class": "a"});
$("body").append($div);

//Method 2. 
$('body').append(
  $('<div/>')
    .attr("id", "newDiv1")
    .addClass("newDiv purple bloated")
    .append("<span/>")
      .text("hello world")
);

//Method 3. 
$( "<div><p>Hello</p></div>" ).appendTo( "body" )


//Method 4. 
$('<div/>', {
    "id": 'foo',
    "name": 'mainDiv',
    "class": 'wrapper',
    "click": function() {
      $(this).toggleClass("test");
    }}).appendTo('body');