$(document).ready(function(){
  $( window ).resize(function() {
    var width = $(".parent").width();
    if(width <  715)
    {
      var left = Math.round((width - 410) / 12.5) + "%";
      if(left < 0){
        left = "0%";
      }

      $(".subparent").css("left",left);
    }
    else{
      $(".subparent").css("left","25%");
      $(".subparent").css("top", "20%");
    }
  });



    $("#button").click(function(){
        $(".text").hide();
        $("#button").hide();
        $('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmzjk8dmGRsCM9b4Da8oPKvqS9tDqjvfqes3wJVPBSuRVG6g/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> ').appendTo(".content");
    });


});
