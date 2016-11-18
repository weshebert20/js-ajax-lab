// jQuery
$(document).ready(function(){
  $('form#new-cat').on('submit', sendOurDataViaAJAX);
  getCats();
});

function sendOurDataViaAJAX(e){
  e.preventDefault();

  // our API uses JSON, so we need to make a javascript object! There are a lot of ways to do this, this just a basic example.
  var cat = {
    note: $('form#new-cat textarea#cat-note').val(),
    name: $('form#new-cat input#cat-name').val()
  };

  // create a new AJAX request
  $.post('https://ga-cat-rescue.herokuapp.com/api/cats', JSON.stringify(cat))
    .done(function(data){
      addCat(JSON.parse(data));
    });

  // clear our input box!
  $('form#new-cat input#cat-name').val(null);
}

function getCats(){
  var cats = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    .done(function(data){
      console.log(data);
      JSON.parse(data).forEach(function(cat){
        console.log(cat);
        addCat(cat);
      });
    });
}

function addCat(cat) {
  $("ul#cats").prepend("<li>" + cat.name + " - <em>" + cat.note + "</em></li>");
}