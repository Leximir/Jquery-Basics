// $( document ).ready(function() {});

$( document ).ready(function() {

    $(".hideBtn").click(function() {
        $(".readLess").slideToggle();

        let currentText = $(this).text();

        if(currentText === "Hide text"){
            $(this).text("Show Text");
        } else { $(this).text("Hide text") }


    });



});