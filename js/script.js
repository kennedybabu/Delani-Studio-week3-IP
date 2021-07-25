console.log(5)

$(document).ready(function(){
    // alert("We are ready")

    $('.left').click(function(){
        $('.front-side').toggle()
    })

    $('.left').click(function(){
        $('.back-side').toggle()
    })
})