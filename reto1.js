

function preparedActivities(activities) {
  const nuevoArreglo = [];

  if (activities.length === 0) {
    console.log("No hay actividades para preparar");
    return nuevoArreglo;
  } else {
    activities.forEach((element) => {
      if (!nuevoArreglo.includes(element)) {
        nuevoArreglo.push(element);
      }
    });
  }
  return nuevoArreglo.sort();
}


const activities1 = [3, 1, 2, 3, 4, 2, 5]
const plannedActivities1 = preparedActivities(activities1)
console.log(plannedActivities1) // [1, 2, 3, 4, 5]

const activities2 = [6, 5, 5, 5, 5]
const plannedActivities2 = preparedActivities(activities2)
console.log(plannedActivities2) // [5, 6]

const activities3 = []
const plannedActivities3 = preparedActivities(activities3)
console.log(plannedActivities3)
