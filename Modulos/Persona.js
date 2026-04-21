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
