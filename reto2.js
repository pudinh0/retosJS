function organizeActivities(activities) {
  //se utiliza la funcion reduce para iterar sobre el arreglo de actividades
  // y reducirlo a un solo objeto que contenga la categoria, actividad y la cantidad de inscritos
  // practicamente itera y crea un objeto que contenga name, quantity y category
  return activities.reduce(
    (acc, activity) => {
      const { name, quantity, category } = activity;

      // si no existe la categoria en el acumulador se crea un nuevo objeto para esa categoria
      if (!acc[category]) {
        acc[category] = {};
      }

      // si la actividad ya existe en la categoria se suma la cantidad, de lo contrario se asigna la cantidad a esa actividad
      if (acc[category][name]) {
        acc[category][name] += quantity;
      } else {
        acc[category][name] = quantity;
      }
      // se retorna el acumulador para la siguiente iteracion
      return acc;
    },
    // se inicializa el acumulador como un objeto vacio
    {},
  );
}

function organizador(actividades) {
  return actividades.reduce((acc, actividades) => {
    const { name, quantity, category } = actividades;

    if (!acc[category]) {
      acc[category] = {};
    }

    if (acc[category][name]) {
      acc[category][name] += quantity;
    } else {
      acc[category][name] = quantity;
    }

    return acc;
  }, {});
}

const activities = [
  { name: "Snorkel", quantity: 5, category: "Acuaticas" },
  { name: "Kayak", quantity: 3, category: "Acuaticas" },
  { name: "Futbol", quantity: 2, category: "Deportes" },
  { name: "Kayak", quantity: 2, category: "Acuaticas" },
  { name: "Tenis", quantity: 4, category: "Deportes" },
];

console.log(organizeActivities(activities));
// Resultado esperado: // { // Acuaticas: { // Snorkel: 5, // Kayak: 5 // }, // Deportes: { // Futbol: 2, // Tenis: 4 // } // }

const activities2 = [
  { name: "Tour", quantity: 10, category: "Excursiones" },
  { name: "Tour", quantity: 5, category: "Excursiones" },
  { name: "Pintura", quantity: 3, category: "Arte" },
];

console.log(organizeActivities(activities2));
// Resultado esperado: // { // Excursiones: { // Tour: 15 // }, // Arte: { // Pintura: 3 // } // }
