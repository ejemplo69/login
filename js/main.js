function login(){ //select en el php

    var user    = $.trim($("#username").val());
    var pass    = $.trim($("#password").val());

    $.ajax({
        url: "php/consultas.php",
        type: "POST",
        dataType: "json",
        data:  {opc: '1', usuario: user, contraseña: pass},
        success: function(data){
            alert(data);
        },
        error: function(r){
            alert('algo esta mal');
        }
    })
    // .done(()=>{
    //     alert('exito');
    // })
    // .fail(()=>{
    //     alert('algo esta mal');
    // })
}


function registrar(){ //el insert en el php
    user  = $.trim($('#usuario').val());
    email = $.trim($('#email').val());
    cel   = $.trim($('#cel').val());
    tel   = $.trim($('#tel').val());
    pass  = $.trim($('#password').val());

    if(user == "" || email =='' || pass ==""){
        alert('un campo esta vacio');
    }else{

        $.ajax({
            url:      'php/consultas.php',
            type:     'POST',
            dataTipe: 'json',
            data:     {opc: '2',usuario: user, email: email, cel: cel, tel: tel, contraseña: pass},
            success: function(data){
                alert(data);
                document.getElementById('contact').reset();
            // window.location.replace('index.html');
                window.location.href= 'index.html';

            },
            error: function(r){
                alert('algo esta mal');
            }
        });
}
}