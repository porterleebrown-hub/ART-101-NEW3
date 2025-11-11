$(".nice-block span").click(function () {

    $(this).parent().toggleClass("more");

    if ($(this).html() == "more") {
        $(this).html("less");
    } else {
        $(this).html("more");
    }

});

$("p").hover(function(){
  $(this).css("background-color", "yellow");
  }, function(){
  $(this).css("background-color", "pink");
});

$("button").click(function(){
  $("div").animate({left: '250px'});
}); 
$("button").click(function(){
  var div = $("div");
  div.animate({height: '300px', opacity: '0.4'}, "slow");
  div.animate({width: '300px', opacity: '0.8'}, "slow");
  div.animate({height: '100px', opacity: '0.4'}, "slow");
  div.animate({width: '100px', opacity: '0.8'}, "slow");
}); 
$("button").click(function(){
  $("div").animate({
    left: '250px',
    height: '+=150px',
    width: '+=150px'
  });
}); 