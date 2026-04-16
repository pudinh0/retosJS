function procesarCalificacion() {
  console.log("Procesando calificación...");

  let calificaciones = [8, 9, 7, 10, 6];

  console.log("calificaciones originales:" + calificaciones);

  let aprobados = [];
  aprobados = calificaciones.filter((calificacion) => calificacion >= 6);
  console.log("calificaciones aprobadas:" + aprobados);

  let reproobados = [];
  reproobados = calificaciones.filter((calificacion) => calificacion < 6);
  console.log("calificaciones reprobadas:" + reproobados);
}
