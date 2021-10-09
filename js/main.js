function login(){

    var user    = $.trim($("#username").val());
    var pass    = $.trim($("#password").val());

    //alert(user+' '+pass);

    $.ajax({
        url: "php/consultas.php",
        type: "POST",
        dataType: "json",
        data:  {usuario: user, contraseña: pass},
        success: function(data){
            alert('exito');
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