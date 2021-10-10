
<?php

    $usuario     =   $_POST['usuario'];
    $contraseña  =   $_POST['contraseña'];
    $opc         =   $_POST['opc'];

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

    // if($conexion -> connect_error){
    //     echo 'conexion fallo';
    // }else{
    //     print('exito');
    // }

    switch ($opc){
        //login
        case 1:
            $sql = "SELECT * FROM usuario WHERE user = '$usuario' AND contraseña = '$contraseña'";//codigo sql

            $consulta = mysqli_query($conexion, $sql) or die (mysqli_error());
            if($fila= mysqli_fetch_array($consulta)){// mysqli_fetch_array contiene el numero de filas de una tabla
                print json_encode($fila['email']); //pone en formato jason (json_encode)
            }else{
                print (false);
            }
            break;

        //crear usuario    
        case 2:
            $email = $_POST['email'];
            $cel   = $_POST['cel'];
            $tel   = $_REQUEST['tel'];

            // $sql = "INSERT INTO usuario (user, email, tel1, tel2, contraseña) VALUE ('$usuario','$email','$cel','$tel','$contraseña')";
            $sql = "CALL `sp_insert_usuario`('$usuario', '$email', '$cel', '$tel', '$contraseña')";

            $consulta = mysqli_query($conexion, $sql) or die (mysqli_error());
            // echo true;
            if($fila = mysqli_fetch_array($consulta)){
                print json_encode($fila[0]);
            }
            break;

        //update    
    }
    
        

?>