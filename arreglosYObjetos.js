let numeros = [1, 2, 3, 4, 5];
let caracteres = ["a", "b", "c", "d", "e"];

let arreglo= [[],[]];

let objetos = [{}, {}, {}];


//agregar / eliminar al final de un arreglo
numeros.push(6);
console.log(numeros);

numeros.pop();
console.log(numeros);

// agregar / eliminar al inicio de un arreglo

//agregar
numeros.unshift(0);
console.log(numeros);

//eliminar
numeros.shift();
console.log(numeros);

//longitud de un arreglo
console.log(numeros.length);
//verificar si un elemento existe en un arreglo
console.log(numeros.includes(3)); // true
//includes devuelve true si el elemento existe en el arreglo y false si no existe
console.log(numeros.includes(10)); // false


//obtener el indice de un elemento en un arreglo
console.log(numeros.indexOf(3)); // 2
//indexOf devuelve el indice del primer elemento encontrado en el arreglo, si el elemento no existe devuelve -1
console.log(numeros.indexOf(10)); // -1

//map el map es una funcion de orden superior que 
// se utiliza para transformar los elementos de un arreglo, 
// creando un nuevo arreglo con los resultados de la transformacion
let numerosCuadrados = numeros.map(numero => numero * numero);
console.log(numerosCuadrados);

//filter el filter es una funcion de orden superior que se utiliza para filtrar los elementos de un arreglo,
// creando un nuevo arreglo con los elementos que cumplen con una condicion especifica  
let encontrado = numeros.filter(numeros => numeros > 2);
console.log(encontrado);

//find el find es una funcion de orden superior que se utiliza para encontrar el primer elemento que cumpla con una condicion especifica,
// devuelve el primer elemento encontrado o undefined si no se encuentra ningun elemento que cumpla con la condicion    
let encontrado2 = numeros.find(numero => numero > 2);
console.log(encontrado2);

//acceder a un elemento de un arreglo
console.log(numeros[0]);
console.log(caracteres[2]);


//sincrono
const persona = {
    nombre: "Juan",
    edad: 30,
    direccion: {
        calle: "Calle 123",
        ciudad: "Ciudad",
        pais: "Pais"
    },
    saludar: function() {return `Hola, mi nombre es ${this.nombre}`},
};

console.log(persona.saludar());

