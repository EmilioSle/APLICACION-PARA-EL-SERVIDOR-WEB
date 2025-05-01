"use strict";
let a = "walther";
let b = "es";
let c = "buen estudiante";
console.log(a + " " + b + " " + c);
const alumno = {
    ID: 1,
    NOMBRE: "JESUS",
    CALIFICACION: 9.5
};
console.log(alumno);
const alumnos = [
    {
        ID: 1,
        NOMBRE: "JESUS",
        CALIFICACION: 10,
    }
];
alumnos.push({ ID: 2, NOMBRE: "WALTHER", CALIFICACION: 8 });
console.log(alumnos);
alumnos.push(alumno);
function Agregar(alumno) {
    alumnos.push(alumno);
}
Agregar({ ID: 3, NOMBRE: "Michi", CALIFICACION: 100 });
console.log(alumnos);
function Agregar2(parm, callback) {
    alumnos.push(parm);
    callback(parm);
}
const alumno4 = { ID: 4, NOMBRE: "MAYKEL", CALIFICACION: 9 };
Agregar2(alumno4, (param) => console.log);
console.log(alumnos);
function Agregar3(parm) {
    return new Promise((resolve) => {
        alumnos.push(parm);
        setTimeout(() => {
            resolve(parm);
        }, 1000);
    });
}
console.log(alumnos);
