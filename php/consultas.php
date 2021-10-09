
<?php

    // $usuario     =   $_POST['usuario'];
    // $contraseña  =   $_POST['contraseña'];

    // if($usuario == "jose"){
    //     echo true;
    // }else{
    //     die (false);
    // }
    $server =  'localhost';   
    $user   =  'root';
    $pass   =  '';
    $db     =  'grupo_69';

    $conexion = new mysqli($server, $user, $pass, $db);

    if($conexion -> connect_error){
        echo 'conexion fallo';
    }else{
        print('exito');
    }
?>