function obtenerUsuarios(callback) {
  setTimeout(() => {
    let usuario = {
      nombre: "martin",
      edad: 30,
    };
    // se llama al callback con el usuario encontrado despues de 2 segundos
    //funcion callback se utiliza para manejar el resultado de una operacion asincrona, en este caso la busqueda de un usuario, y se ejecuta una vez que la operacion ha finalizado, permitiendo asi continuar con el flujo del programa sin bloquearlo mientras se espera el resultado de la operacion asincrona
    // el callback se ejecuta con el usuario encontrado como argumento, lo que permite acceder a sus propiedades dentro del callback y realizar las acciones necesarias con la informacion del usuario
    callback(usuario);
  }, 2000);
}

console.log("inicio busqueda");

// se define el callback que se pasara a 
// la funcion obtenerUsuarios, este callback se ejecutara 
// una vez que se haya encontrado el usuario, y se encargara
// de imprimir el nombre del usuario encontrado y un mensaje indicando 
// que la busqueda ha finalizado


let callback = (usuario) => {
  console.log("usuario encontrado: " + usuario.nombre);
  console.log("fin busqueda");
  
};


