function cortarIngredientes(ingredientes, callback) {
  setTimeout(() => {
    console.log("Cortando:" + ingredientes);
    callback();
  }, 2000);
}



function cocinar(accion, callback) {
  setTimeout(() => {
    console.log("Cocinando:" + accion);
    callback();
  }, 3000);
}

function servirPlato(plato) {
  setTimeout(() => {
    console.log("Sirviendo:" + plato);
  }, 1000);
}



function prepararReceta(plato, callback) {
  console.log("Iniciando la preparación de la receta");
  cortarIngredientes("vegetales",()=>{
    cocinar("saltear",()=>{
      cortarIngredientes("cortar pollo", ()=>{
        cocinar("freir", ()=>{
          cocinar("mezclar todo", ()=>{
            servirPlato("plato final");
          });
        });
      });
    });
  });
}

prepararReceta("pollo a la wok", ()=>{console.log("Receta completada")});