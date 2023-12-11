$(".start-btn").click(
    function(){
        $(".start-btn").css("opacity", "0");
        $(".bottom-title1").css ("opacity", "1");
        $(".bottom-title2").css ("opacity", "1");
    }
);

$(".start-btn").hover(
    function(){
        $(".start-btn").toggleClass ("white");
    }
);


