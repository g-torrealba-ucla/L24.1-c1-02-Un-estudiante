import { Estudiante } from "./estudiante.js";

let est1 = new Estudiante("Jorge", 2, 3, 4);
document.getElementById("salida").innerHTML = est1.notaFinal();
