// $(document).ready(function(){});

$(document).ready(function(){

    // $("#saveBtn").click(function (){
    //
    //     let putHeight = $("#height").val();
    //     let putWidth = $("#width").val();
    //     let putColor = $("#color").val();
    //
    //     $('#square').css({
    //         height: putHeight,
    //         width: putWidth,
    //         backgroundColor: putColor
    //     });
    //
    // });

    $("#height").on("input", function(){
        let putHeight = $(this).val();
        $("#square").css('height', putHeight)
    });

    $("#width").on("input", function(){
        let putWidth = $(this).val();
        $("#square").css('width', putWidth)
    });

    $("#color").on("input", function(){
        let putColor = $(this).val();
        $("#square").css('background-color', putColor)
    });

    $("#range").on("input", function(){
        let putRange = $(this).val();
        $("#square").css({
            borderRadius: putRange + "%"
        })
    });

});