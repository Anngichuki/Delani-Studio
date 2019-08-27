$(document).ready(function(){
    $(".peter").click(function(){
        $("#img1").toggle();
        $(".p1").toggle();
    });
    $(".jane").click(function(){
        $("#img2").toggle();
        $(".p2").toggle();
    });
    $(".mary").click(function(){
        $("#img3").toggle();
        $(".p3").toggle();
    });
    $("form#mof").submit(function(event){
        var box = $("input#box").val();
        var trans = $("input#trans").val();
        var textarea = $("input#message").val();

if ( $("input#box").val() && 
$("input#trans").val() &&
 $("input#message").val() != ""
) 
 {
    alert(box  +"  We have received your message."+"Thankyou for reaching out to us");
}
else {
     alert("Please fill all the input fields");
    }
    event.preventDefault();

});
});
$(document).ready(function(){
$("#Project").mouseenter(function(){
$(".hover1").show();
}).mouseleave(function(){
    $(".hover1").hide();
});
$("#work2").mouseenter(function(){
    $(".hover2").show();
}).mouseleave(function(){
    $(".hover2").hide();
});
$("#work3").mouseenter(function(){
   $(".hover3").show();
}).mouseleave(function(){
    $(".hover3").hide();
});
$("#work4").mouseenter(function(){
   $(".hover4").show();
}).mouseleave(function(){
   $(".hover4").hide();
});
$("#work5").mouseenter(function(){
    $(".hover5").show();
    }).mouseleave(function(){
        $(".hover5").hide();
    });
$("#work6").mouseenter(function(){
   $(".hover6").show();
}).mouseleave(function(){
    $(".hover6").hide();
 });
$("#work7").mouseenter(function(){
    $(".hover7").show();
}).mouseleave(function(){
        $(".hover7").hide();
    });
$("#work8").mouseenter(function(){
    $(".hover8").show();
}).mouseleave(function(){
    $(".hover8").hide();
});
});