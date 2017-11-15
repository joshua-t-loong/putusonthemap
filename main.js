$(document).ready(function(){
  recenterContent();


  $( window ).resize(function() {
    recenterContent();
  });



    $("#button").click(function(){
        $(".text").hide();
        $("#button").hide();
        $('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmzjk8dmGRsCM9b4Da8oPKvqS9tDqjvfqes3wJVPBSuRVG6g/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> ').appendTo(".content");
    });


});

function recenterContent(){
  var width = $(".parent").width();
  if(width <  715)
  {
    var left = Math.round((width - 410) / 12.5) + "%";
    var top =  20 + Math.round((width - 410) / 43.5) + "%";
    if(left < 0){
      left = "0%";
    }

    $(".subparent").css("left",left);
    $(".subparent").css("right",left);
    $(".subparent").css("top", top)

  }
  else{
    $(".subparent").css("left","25%");
    $(".subparent").css("top", "27%");
  }
};
