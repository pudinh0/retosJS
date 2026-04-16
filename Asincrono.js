function obtenerUsuarios(){
    setTimeout(()=>{
        let usuario = {
            nombre: "martin",
            edad: 30
        }

        return usuario;


    }, 2000);

    console.log("inicio busqueda")
    let usuario = obtenerUsuarios();
    console.log("usuario encontrado: " + usuario);
    console.log()("fin busqueda")



}