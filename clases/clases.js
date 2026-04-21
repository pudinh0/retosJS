class Persona {
  constructor(nombre = "Anónimo", edad = 999) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    return `hola mi nombre es: ${this.nombre} y tengo ${this.edad} años`;
  }

  #generarId() {
    return Math.floor(Math.random() * 1000);
  }
}

class Estudiante extends Persona {
  constructor() {
    super();
    this.carrera = "";
  }

  estudiar() {
    return `estoy estudiando ${this.carrera} y mi nombre es ${this.nombre}`;
  }

  #calcularPromedio() {
    return Math.floor(Math.random() * 10);
  }

  verPromedio() {
    return `mi promedio es ${this.#calcularPromedio()} y mi nombre es ${this.nombre}`;
  }
}

let estudiante1= new Estudiante("Juan", 20);
estudiante1.carrera = "Ingeniería en Sistemas";
console.log(estudiante1.saludar());
console.log(estudiante1.estudiar());
console.log(estudiante1.verPromedio());

