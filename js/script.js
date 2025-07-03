// Kod se izvrsava tek kada se ucita HTML
// document - element, document, window - $("#nekiId") - document.getElementById('nekiId)
// ready - dogadjaj/event - ready, click, mouseIn, mouseOut, hover ,...
// function() {}

// $( document ).ready(function() {});

$(document).ready(function() {

//  document.getElementById('clickMeButton').addEventListener('click', function() {});
    $("#clickMeButton").click(function() {
        console.log("TEST");
    });

    // JS :

    // for(let i = 0; i < document.getElementsByClassName('anchorLink').length; i++){
    //     document.getElementsByClassName('anchorLink')[i].addEventListener('click', function(){
    //         console.log("Test");
    //     })
    // }

    // Jquery:

    $('.anchorLink').click(function () {
        //this.style.backgroundColor = "red";

        // $(this).css('background-color', 'red');
        // $(this).css('color', 'white');

        $(this).animate({
           backgroundColor: 'red',
           color: 'white'
        }, 2000);
    })

    $("#hideBtn").click(function() {
        $("#pg").slideToggle();
    });



});