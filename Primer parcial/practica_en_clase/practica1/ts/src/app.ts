let a:string="walther"
let b:string="es"
let c:string="buen estudiante"
console.log(a+" "+b+" "+c)

const alumno:Ialumno ={
    ID:1,
    NOMBRE:"JESUS",
    CALIFICACION: 9.5

}
console.log(alumno)
interface Ialumno {
    ID: number;
    NOMBRE: string; 
    CALIFICACION?: number;
}

const alumnos: Ialumno []=[
    {
        ID:1,
        NOMBRE:"JESUS",
        CALIFICACION: 10,
    }


]
alumnos.push({ID:2,NOMBRE:"WALTHER",CALIFICACION:8});
console.log(alumnos);

alumnos.push(alumno);
function Agregar (alumno: Ialumno):void{
    alumnos.push(alumno);
}
Agregar({ID:3,NOMBRE:"Michi",CALIFICACION:100});

console.log(alumnos);

function Agregar2 (parm: Ialumno, callback:(alumno: Ialumno)=>void) {
    alumnos.push(parm);
    callback(parm);

}
const alumno4: Ialumno ={ID:4,NOMBRE:"MAYKEL",CALIFICACION:9}
Agregar2(alumno4, (param:Ialumno)=> console.log);

console.log(alumnos)

function Agregar3 (parm: Ialumno):Promise<Ialumno> 
{
    return new Promise( 
        (resolve)=>{
            alumnos.push(parm);
            setTimeout(()=>{
                resolve(parm); 

            },1000
        
        )
             
    },
    )
    
    
}
console.log(alumnos)