import { Estudiante } from "./estudiante.js";

let est1 = new Estudiante("Jorge Perez", 1, 2, 3);
document.getElementById("salida").innerHTML = est1.notaFinal();
