$(document).ready(function(){
  $("#get_color").click(function(event){
    event.preventDefault();
    var data = $(this).serialize();
    var url = $(this).attr('action')
  $.post(url, data, function(response){
    console.log(response);
    console.log(response.cell)//<---what's coming back???
    console.log(response.color)//<---what's coming back???
    $("#color_me").action(
      function() { $("#color_me li").css(color);
//Putting in notes, so I can go back to where I was stuck.
//Feel like I'm close here. Since I'm passing in two pieces..
//of data to JSON, I am thinking that I could call the 
//color object on the css selector of '#color_me li'.  I..
//can't imagine that 'color' will simply do, it, but I had
//to timebox and move on before diving in and researching syntax.
    })
  })
  })
});
