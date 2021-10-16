var arreglo = [
    {"usuario": "maria", "contraseña": "1122"},
    {"usuario": "jose", "contraseña": "1122"},
    {"usuario": "ana", "contraseña": "1122"}
];

function login(){
    var usuario    = document.getElementById('user').value;
    var contraseña = document.getElementById('pass').value; 

    var x = false; //variable de retorno

    for(var i=0 in arreglo){
        if(usuario == arreglo[i]['usuario'] && contraseña == arreglo[i]['contraseña']){
            //alert('muy bien');
            var res = prompt('cuanto es 4 + 2 ?');
            if(captcha(res)){
                x = true;
                break;
            }else{
                x = false;
            } 
        }else{
            console.log(arreglo[i]['usuario']);
        }

    }
    if(x == true){
        alert('todo esta bien');
    }else{
        alert('algo anda mal');
    }
}



    function captcha(j){
        if(j == 6){
            return true;
        }else{
            return false;
        }
    }

