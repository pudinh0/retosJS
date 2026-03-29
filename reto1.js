// se creo la función preparedActivities que recibe un arreglo de actividades, esta función se encarga de eliminar los elementos repetidos y ordenarlos de menor a mayor, si el arreglo esta vacio se muestra un mensaje indicando que no hay actividades para preparar y se retorna un arreglo vacio.
function preparedActivities(activities) {
  // se crea un nuevo arreglo para almacenar las actividades sin repetición
  const nuevoArreglo = [];

  // se verifica si el arreglo de actividades esta vacio, 
  // si es asi se muestra un mensaje indicando que no hay actividades para preparar 
  // y se retorna el nuevo arreglo vacio, de lo contrario se recorre el arreglo de actividades 
  // y se verifica si el elemento no esta incluido en el nuevo arreglo
  // si no esta incluido se agrega al nuevo arreglo, finalmente se retorna el nuevo arreglo ordenado de menor a mayor
  if (activities.length === 0) {
    console.log("No hay actividades para preparar");
    return nuevoArreglo;
  } else {
    //decidi cambiar el for anterior por un for each para recorrer el arreglo por practicidad, 
    // el resultado es el mismo, se verifica si el elemento no esta incluido en el nuevo arreglo 
    // y si no esta incluido se agrega al nuevo arreglo
    activities.forEach((element) => {
      if (!nuevoArreglo.includes(element)) {
        nuevoArreglo.push(element);
      }
    });
  }
  //se retorna el nuevo arreglo ordenado de menor a mayor
  return nuevoArreglo.sort();
}

//PRUEBASs
const activities1 = [3, 1, 2, 3, 4, 2, 5];
const plannedActivities1 = preparedActivities(activities1);
console.log(plannedActivities1); // [1, 2, 3, 4, 5]

const activities2 = [6, 5, 5, 5, 5];
const plannedActivities2 = preparedActivities(activities2);
console.log(plannedActivities2); // [5, 6]

const activities3 = [];
const plannedActivities3 = preparedActivities(activities3);
console.log(plannedActivities3);
