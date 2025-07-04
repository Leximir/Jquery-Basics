// $(document).ready(function(){});

$(document).ready(function(){

    const username = 'admin';
    const password = '123';

    let counter = 1;

    $("#loginButton").click(function (){

        let putUsername = $("#username").val();
        let putPassword = $("#password").val();

        $("#usernameWarning").hide();
        $("#passwordWarning").hide();

        if(username !== putUsername) {
            $('#usernameWarning').show();
        }

        if(password !== putPassword){
            $('#passwordWarning').show();
        }

        if(username === putUsername && password === putPassword){
            $('#loginForm').toggle();
            let p = $('<p>Uspjesno ste se prijavili na sajt</p>');
            $('body').append(p)
        }

        if(counter >= 3){
            $("#username").prop('disabled', true);
            $("#password").prop('disabled', true);
        }

        counter = counter + 1;

        console.log(counter)
    });
});