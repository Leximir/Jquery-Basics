// $(document).ready(function(){});

$(document).ready(function(){

    $('#sum').click(function () {

        let result = Number($('#number').val()) + Number($('#number1').val());

        $("#result").text(result);
    });

    $('#subtract').click(function () {

        let result = Number($('#number').val()) - Number($('#number1').val());

        $("#result").text(result);
    });

    $('#multiply').click(function () {

        let result = Number($('#number').val()) * Number($('#number1').val());

        $("#result").text(result);
    });

    $('#divide').click(function () {

        if(Number($('#number1').val()) === 0){
            $("#result").text("Ne moze se dijeliti nulom");
            return;
        }

        let result = Number($('#number').val()) / Number($('#number1').val());

        $("#result").text(result);
    });

});