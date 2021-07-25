console.log(5)

$(document).ready(function(){
    // alert("We are ready")

    //toggle the left icon
    $('.left').click(function(){
        $('.left-front-side').toggle()
    })

    $('.left').click(function(){
        $('.left-back-side').toggle()
    }) 


    //toggle the middle icon
    $('.middle').click(function(){
        $('.middle-front-side').toggle()
    })

    $('.midle').click(function(){
        $('.middle-back-side').toggle()
    })

    //toggle the right icon

    $('.right').click(function(){
        $('.right-front-side').stop().toggle()
    })

    $('.right').click(function(){
        $('.right-back-side').stop().toggle()
    })

    //hover effect on the icons
    $(".div1").hover(function(){
        $(this).find(".over-lay").fadeIn(200)
    }, function(){
        $(this).find(".over-lay").fadeOut(100)
    })

    $(".div2").hover(function(){
        $(this).find(".over-lay-2").fadeIn(200)
    }, function(){
        $(this).find(".over-lay-2").fadeOut(100)
    })

    $(".div3").hover(function(){
        $(this).find(".over-lay-3").fadeIn(200)
    }, function(){
        $(this).find(".over-lay-3").fadeOut(100)
    })
})
