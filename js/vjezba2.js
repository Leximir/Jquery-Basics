// $(document).ready(function(){});

$(document).ready(function(){

    $('#sum').click(function () {

        let result = Number($('#number').val()) + Number($('#number1').val());

        $("#result").text(result);
    });

});