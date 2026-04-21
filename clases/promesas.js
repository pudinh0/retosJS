function obtenerDatos() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let exito = false;
            if (exito) {
                resolve("Datos obtenidos exitosamente");
            } else {
                reject("Error al obtener los datos");
            }
        }, 2000);
    });
}

//obtenerDatos()
  //  .then((respuesta) => {
    //    console.log(respuesta);
   // })
   // .catch ((error) => {
    //console.error(error);
//});


function buscarUsuario() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let exito = true;
            if (exito) {
                let usuario = { id: 1, 
                    nombre: "Juan" };
                resolve(usuario);
            } else {
                reject("Error al obtener los datos");
            }
        }, 2000);
    });
}

//buscarUsuario()
  //  .then((usuario) => {
    //    console.log("Usuario encontrado:", usuario);
   // })
   // .then(() => {
    //    console.log("He terminado");
    //})
    //.catch((error) => {
     //   console.error("Error:", error);
    //});

// Para evitar el callback hell, podemos usar async/await, que nos permite escribir código asíncrono de manera más legible y fácil de entender.
// La función async indica que la función es asíncrona y puede contener await, que espera a que una promesa se resuelva antes de continuar con la ejecución del código.
// el await solo se puede usar dentro de una función async, 
// y nos permite esperar a que una promesa se resuelva antes de continuar con la ejecución del 
// código, lo que nos permite escribir código asíncrono de manera más legible y fácil de entender.
async function main(){
    console.log("inicio la ejecucion");

    try {
        let usuario = await buscarUsuario();
        console.log("Usuario encontrado:", usuario);
    } catch (error) {
        console.error("Error:", error);
    }
}    

//main();


async function obtenerPost(idPost){
    // Simulamos una llamada a una API para obtener un post por su ID
    //la api es https://jsonplaceholder.typicode.com/posts/{idPost} que devuelve un post con el id especificado
    // funciona con cualquier id entre 1 y 100, por ejemplo https://jsonplaceholder.typicode.com/posts/1 devuelve el post con id 1
    let respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
    let data = await respuesta.json();
    return data;
    }

obtenerPost(1)
    .then(post => console.log(post))
    .catch(error => console.error(error));