const user = "usuario";

function pedirDatos (){
    let usuario = prompt ("Ingrese un usuario válido");
    let contraseña = prompt ("Ingrese la contraseña asociada al usuario");

    if (validarDatos (usuario, contraseña)){
        alert ("Bienvenido " + usuario);
        iniciarPlataforma ();
    } else{
        alert ("Usuario y/o contraseña incorrectos");
    }
}

pedirDatos ();

function validarDatos(usuario,contraseña){
    if ((usuario === user) && (contraseña !== " ")){
        return true ;
    }else {
        return false ;
    }
}

function iniciarPlataforma (){
    let inscripto = "";
    let finalizarPlataforma = false;

    while (!finalizarPlataforma){
        let codigo = prompt ("Ingrese su código de comisión en curso")
        let segundoDato = obtenerCodigo (codigo)

        if (segundoDato){
            console.log ("Bienvenido a" + "\n" + segundoDato )
            inscripto += "\n"+ segundoDato;

        }else{
            if (codigo === null){
                finalizarPlataforma = true;
            }else{
                alert ("Ingrese un código de comisión válido")
            }
        }
    }

    if (inscripto != ""){
        let resp = confirm ("Está seguro que pertenece a :"+ inscripto + "?");
        if (resp){
            alert("Bienvenido a CFP Dardo Rocha");
        }
    }

}

function obtenerCodigo(codigo){ 
    let segundoDato  ;
    switch(codigo){
        case "1" : 
            segundoDato = "Taller reparación de radiadores";
            break;
        case "2" : 
            segundoDato = "Carrera mecánica";
            break;
        case "3" : 
            segundoDato = "Curso de mecánica automotriz" ;
            break;
        case "4" : 
            segundoDato = "Curso de inyección electrónica";
            break;
        default:
            segundoDato = false;           
    }
    return segundoDato ;  
}