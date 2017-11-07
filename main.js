$(document).ready(function(){
    $("#button").click(function(){
        $(".text").hide();
        $("#button").hide();
        $('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc-EpvqiGwDPBBOXyRRb_MXS3A0F9WnC2NpvLV6zLrafz7lDg/viewform?embedded=true" width="800" height="650" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>').appendTo(".content");
    });
});
