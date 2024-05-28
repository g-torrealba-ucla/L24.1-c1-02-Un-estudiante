export class Estudiante {
  constructor(nombre, nota1, nota2, nota3) {
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
  }
  notaFinal() {
    return this.nota1 + this.nota2 + this.nota3;
  }
}
