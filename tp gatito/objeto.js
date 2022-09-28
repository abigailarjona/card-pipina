let pipina = {
nombre: 'Pipina' ,
dueña: 'Abigail',
raza: "Europeo comun",
edad: "8 años",
comida: "Royal canin",
vacunas: "Al dia",
visitasVete: "Septiembre 2022",
actividades: "Dormir, jugar y comer"
}

console.log(pipina)


document.getElementById("card-name").innerHTML = "Nombre: " + pipina.nombre;
document.getElementById("card-dueña").innerHTML = "Dueña: " + pipina.dueña;
document.getElementById("card-raza").innerHTML = "Raza: " + pipina.raza;
document.getElementById("card-edad").innerHTML = "Edad: " + pipina.edad;
document.getElementById("card-comida").innerHTML = "Comida: " + pipina.comida;
document.getElementById("vete").innerHTML = "Visitas al veterinario: " + pipina.visitasVete;
document.getElementById("act").innerHTML = "Actividades: " + pipina.actividades;


