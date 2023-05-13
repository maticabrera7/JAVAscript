let nombre = prompt("Usuario");
let password = prompt("Contraseña");
let Nuevogasto;
let SumaSuper = 1;
let Supermercado;
let Carnicaria;
let Verdulería;
let Alquiler;
let Servicios;

if(nombre =="" || password ==""){alert("Ingrese los campos solicitados")}

if(nombre !=="" && password !==""){alert("Bienvenido" + " " + nombre)};

alert(nombre + " " + "¿que consumos deseas agregregar hoy? selecciona por indice numérico: 1-Supermercado; 2-Carnicería; 3-Verdulería; 4-Alquiler, 5-Servicios, 6-Extras");

Nuevogasto = prompt ("Seleccione un consumo");

while (Nuevogasto =="" || Nuevogasto > 6){
Nuevogasto = prompt ("Seleccione un consumo")
};

let Resultado = 0;
function sumar(AcumuladoSuper, Nuevoingreso){
   Resultado= AcumuladoSuper + Nuevoingreso;
}
function mostrar(mensage){
    console.log(mensage)
}


if (Nuevogasto==1){alert("Seleccionaste"+" "+"Supermercado")}
if (Nuevogasto==1){Supermercado=prompt ("ingrese el monto")};

alert(Supermercado);

sumar(SumaSuper, Supermercado);
mostrar(Resultado);

if (Nuevogasto==2){alert("Seleccionaste"+" "+"Carnicería")}
if (Nuevogasto==3){alert("Seleccionaste"+" "+"Verdulería")}
if (Nuevogasto==4){alert("Seleccionaste"+" "+"Alquiler")}
if (Nuevogasto==5){alert("Seleccionaste"+" "+"Servicios")}
if (Nuevogasto==6){alert("Seleccionaste"+" "+"Extras")}






if(Nuevogasto == 1){};