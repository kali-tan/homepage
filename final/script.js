$(".enraged").hover(
    function(){
        $(".enraged").toggleClass("enragedaction");
    }
);

$(".anxious").hover(
    function(){
        $(".anxious").toggleClass("anxiousaction");
    }
)

$(".alive").hover(
    function(){
        $(".alive").toggleClass("aliveaction");
    }
)

$(".hopeful").hover(
    function(){
        $(".hopeful").toggleClass("hopefulaction");
    }
)

$(".grieving").hover(
    function(){
        $(".grieving").toggleClass("grievingaction");
    }
)

$(".lonely").hover(
    function(){
        $(".lonely").toggleClass("lonelyaction");
    }
)

$(".comfortable").hover(
    function(){
        $(".comfortable").toggleClass("comfortableaction");
    }
)

$(".empathy").hover(
    function(){
        $(".empathy").toggleClass("empathyaction");
    }
)

$(".main-title").hover(
    function(){
        $(".main-title").toggleClass("pause");
        $(".main-title").toggleClass("reverse-title");
        $(".main-container").toggleClass("reverse-body");
        $(".enraged").toggleClass("invisible");
        $(".anxious").toggleClass("invisible");
        $(".alive").toggleClass("invisible");
        $(".hopeful").toggleClass("invisible");
        $(".grieving").toggleClass("invisible");
        $(".lonely").toggleClass("invisible");
        $(".comfortable").toggleClass("invisible");
        $(".empathy").toggleClass("invisible");
    }
)

$(".home").hover(
    function(){
        $(".home").toggleClass("active-home");
    }
)

$( function() {
    $(".draggable" ).draggable();
} );

