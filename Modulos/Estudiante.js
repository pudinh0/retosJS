class Estudiante extends Persona {
  constructor() {
    super();
    this.carrera = "";
  }

  estudiar() {
    return `estoy estudiando ${this.carrera} y mi nombre es ${this.nombre}`;
  }
// el # indica que el método es privado, es decir, solo se puede acceder a él desde dentro de la clase
  #calcularPromedio() {
    return Math.floor(Math.random() * 10);
  }

  verPromedio() {
    return `mi promedio es ${this.#calcularPromedio()} y mi nombre es ${this.nombre}`;
  }
}
