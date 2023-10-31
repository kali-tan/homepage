$(".dontplay-btn").click(
    function(){
        $("body").toggleClass("dark");  
        $(".dontplay-btn").hide();
        $(".button1").hide();
        $(".dontplay").css("opacity", "1");
        $(".button3").css("opacity", "1");
    }
);


$(".hops-btn").hover(
    function(){
       $(".hops-information").css("opacity", "1");
    }
);

$(".kit-btn").hover(
    function(){
       $(".kit-information").css("opacity", "1");
    }
);

$(".hops-information").hover(
    function(){
        $(".hops-information").css("opacity", "0");
    }
);

$(".kit-information").hover(
    function(){
        $(".kit-information").css("opacity", "0");
    }
);

$(".pet-btn").click(
    function(){
        $(".bunnyimage2").css("animation", "appear 1s");
        $(".bunnyimage").css("animation", "disappear 1s");
        $(".pet-btn").css("background-color", "#94b2cd");
    }
);

$(".pet-btn2").click(
    function(){
        $(".kitimage2").css("animation", "appear 1s");
        $(".kitimage").css("animation", "disappear 1s");
        $(".pet-btn2").css("background-color", "#94b2cd");
    }
);

$(".feed-btn").click(
    function(){
        $(".carrot").css("opacity", "1");
        $(".feed-btn").css("background-color", "#94b2cd");

    }
);

$(".feed-btn2").click(
    function(){
        $(".fish").css("opacity", "1");
        $(".feed-btn2").css("background-color", "#94b2cd");

    }
);


$(".trick-btn").click(
    function(){
        $(".bunnyimage").css("animation", "spin 1s linear");
        $(".trick-btn").css("background-color", "#94b2cd");
    }
);

$(".trick-btn2").click(
    function(){
        $(".kitimage").css("animation", "spin 1s linear");
        $(".trick-btn2").css("background-color", "#94b2cd");
    }
);


$( function() {
    $( ".draggable" ).draggable();
  } 
);




