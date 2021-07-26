
$(document).ready(function(){

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

    $('.middle').click(function(){
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

    $(".div4").hover(function(){
        $(this).find(".over-lay-4").fadeIn(200)
    }, function(){
        $(this).find(".over-lay-4").fadeOut(100)
    })

    $(".div5").hover(function(){
        $(this).find(".over-lay-5").fadeIn(200)
    }, function(){
        $(this).find(".over-lay-5").fadeOut(100)
    })

    $(".div6").hover(function(){
        $(this).find(".over-lay-6").fadeIn(200)
    }, function(){
        $(this).find(".over-lay-6").fadeOut(100)
    })

    $(".div7").hover(function(){
        $(this).find(".over-lay-7").fadeIn(200)
    }, function(){
        $(this).find(".over-lay-7").fadeOut(100)
    })

    $(".div8").hover(function(){
        $(this).find(".over-lay-8").fadeIn(200)
    }, function(){
        $(this).find(".over-lay-8").fadeOut(100)
    })

   

    //submit user input 
    // $("form").keypress(function(event){        
    //     if(event.which === 13) {   
    //         event.preventDefault()
    //         $("#form").submit()
    //         return false
    //     }
    // })
})
let submitForm = document.getElementById("#form")

// document.querySelector("f").addEventListener("keyup", function(event){
//     let userName = document.getElementById("#name").value

//     if(event.keycode === "Enter") {
//         event.preventDefault()
//         console.log('hello')
//         document.getElementById("#form").submit()
//         return false
//     }
// })

document.getElementById("form").addEventListener("keyup", function(e) {
    let userName = document.getElementById("name").value
    if(e.which === 13) {
        // e.preventDefault()
        console.log(userName)
        document.getElementById("form").submit()
        alert("Thank you " + userName + " for your feedback!")
    }
})


