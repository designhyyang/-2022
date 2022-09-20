$(document).ready(function(){
    $(".tabArea .tab li a").on("click", function(){
        const num = $(".tabArea .tab li a").index($(this));
        $(".tabArea .tab li").removeClass("on");
        $(".tabArea .tabCont").removeClass("on");


        $(`.tabArea .tab li:eq(` + num +`)`).addClass("on");
        $(`.tabArea .tabCont:eq(` + num +`)`).addClass("on");
    });
});

