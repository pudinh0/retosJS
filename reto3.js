const actividades = [
  { nombre: "playa" },
  { nombre: "cabaña" },
  { nombre: "snorkel" },
];

function createFrame(actividades) {
    const nombre = actividades.map(actividades => actividades.nombre);

    const maxLenght = Math.max( nombre.map( n  => n.length))
    const borde = "*".repeat(maxLenght + 4);



    console.log(borde)
  actividades.forEach((element) => {
    console.log("*" + element.nombre + "*");
  });

  console.log(borde)
}

createFrame(actividades);
