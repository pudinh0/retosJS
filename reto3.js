const actividades = [
  { nombre: "playa" },
  { nombre: "cabaña" },
  { nombre: "snorkel" },
];

function createFrame(actividades) {
    const nombre = actividades.map(actividades => actividades.nombre);

    // se obtiene la longitud maxima de los nombres con el operador ...  para determinar el tamaño del borde comparando uno
    // por uno cada elemento del arreglo con la funcion map para obtener la longitud de cada nombre y obtener el valor maximo con Math.max
    const maxLenght = Math.max(...nombre.map( n  => n.length))
    //se crea el borde utilizando el metodo repeat para repetir el caracter * la cantidad de veces determinada por maxLenght 
    // +4  para agregar un espacio a cada lado del nombre
    const borde = "*".repeat(maxLenght + 4);


  //se imprime el borde y luego se itera sobre el arreglo de actividades para impirmir cada nombre con asterisco al lado
    console.log(borde)
  actividades.forEach((element) => {
    console.log("*" + element.nombre + "*");
  });

  console.log(borde)
}

createFrame(actividades);
