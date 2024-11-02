console.log("hola technalia"); // Mensaje por consola
let numero = 2; // Variable que va a cambiar
const numero3 = 3; // Variable constante
let boleano = true; // Variable Boleana, falso o verdadero
// let null = null; // Valor por defecto, definido por programación
let NoDefinido = undefined; // Dado por el sistema
let NumeroGrande = 2n;
console.log(NumeroGrande);

//Declaración de Objeto
let carro = {
    marca: "Suzuki",
    modelo: "Swift",
    valor: 50000000,
}
console.log("Objeto", carro.marca)

// Declaración de arreglo y arrays
let verduras = ["lechuga", "tomate"]
console.log("Arreglo verduras: ", verduras[1])

//string
let string = "hola como estas";
let string1 = " espero que bien";
let string2 = `${string} ${string1}`;
console.log("Ejemplo String ", string2)

// Manejo de inforacion

let frase = "Java Script tiene varias funciones";
let numeroDeCaracteres = frase.length;
console.log(numeroDeCaracteres);
console.log("Ejemplo en minusculas", frase.toLocaleLowerCase());
console.log("Ejemplo en mayusculas", frase.toLocaleUpperCase());
console.log("Extracción de caracteres", frase.substring(11, numeroDeCaracteres));

//condicionales

// Asignar un valor un =
// comparación de datos ==
// comparación de datos y tipo de datos ===
// mayor que > y menor que <
// diferentes en valor y tipo de datos !==
// diferentes en valor !=
// mayor o igual >=, menor o igual <=

let nombre = "Andres";
let nombre2 = "Alexander";

//Condicional IF
if (nombre == nombre2) {
    console.log("Los nombres son iguales", nombre)
} else {
    console.log("Los nombres no son iguales", nombre, " ", nombre2)
}

//Condicional Switch

switch (nombre) {
    case "Alexander":
        console.log("Para el caso Switch El nombre es Alexander");
        break;
    case "Andres":
        console.log("Para el caso Switch El nombre es Andres");
        break;
    default:
        console.log("no es ningu nombre");
        break;
}

// condicional While

let i = 1;
while (i <= 5) {
    console.log("Prueba de While en paso ", i)
    i++;
}

// condicional dowhile
let j = 1;
do {
    console.log("Prueba de doWhile en paso ", j)
    j++;
} while (j <= 5);

// Comparar 3 numeros
/* 
Cual numero es mayor? e imprimir en consola
Hay numeros repetidos? e imprimir por consola
*/

let num1 = 6;
let num2 = 3;
let num3 = 5;

if (num1 > num2 && num1 > num3) {
    console.log("El número mayor es ", num1);
} else {
    if (num2 > num1 && num2 > num3) {
        console.log("El número mayor es ", num2);
    } else {
        if (num3 > num1 && num3 > num2) {
            console.log("El número mayor es ", num3);
        }
    }
}

// Ciclo FOR

let listaCompras = ["manzanas", "peras", "naranjas"];
for (let l = 0; l < listaCompras.length; l++) {
    console.log(listaCompras[l]);
}

let lista1 = [1, 3, 5, 7, 9];
let lista2 = [2, 4, 16, 8, 0];
let guardar1 = "";
/*let guardar2 = "";
for (let index = 0; index < lista1.length; index++) {
    if (lista1[index] > lista1[index + 1] && lista1[index] > guardar1) {
        guardar1 = lista1[index];
    } else {
        if (lista1[index + 1] > lista1[index] && lista1[index + 1] > guardar1){
            guardar1 = lista1[index + 1];
        }
    }
}
for (let index = 0; index < lista2.length; index++) {
    if (lista2[index] > lista2[index + 1] && lista2[index] > guardar2) {
        guardar2 = lista2[index];
    } else {
        if (lista1[index + 1] > lista2[index] && lista2[index + 1] > guardar2){
            guardar2 = lista2[index + 1];
        }
    }
}
if (guardar1>guardar2) {
    alert(`El valor mayor es ${guardar1}`)
} else {
    alert(`El valor mayor es ${guardar2}`)
}
*/
guardar1 = 0;

for (let i = 0; i < lista1.length; i++) {
    if (lista1[i] > guardar1) {
        guardar1 = lista1[i];
    }
}
for (let i = 0; i < lista2.length; i++) {
    if (lista2[i] > guardar1) {
        guardar1 = lista2[i];
    }
}
console.log(`El valor mayor es ${guardar1}`)

//for of pendiete

//for in

let auto = {
    marca: "mazda",
    modelo: "2020",
    referencia: "Mazda 2",
    valor: "50000000"
}

for (carros in auto) {
    console.log(carros)
}
for (carros in auto) {
    console.log(`${carros}: ${auto[carros]}`)
}

// Funciones

const precioOrignal = 1000;
const porcentajeDeDescuento = 25;

function calcularDescuento(precioProducto, descuento) {
    const resultadoDescuento = (precioProducto * descuento) / 100;
    const precioConDescuento = precioProducto - resultadoDescuento;
    return precioConDescuento;
}

const precioFinal = calcularDescuento(precioOrignal, porcentajeDeDescuento);
console.log(`Precio final a pagar es: ${precioFinal}`)

//función Flecha

const flecha = (name) => {

    return `hola ${name}`;
}

let almacen = "0";
function calcularMayor(numeros1, numeros2) {
    for (let i = 0; i < numeros1.length; i++) {
        if (numeros1[i] > almacen) {
            almacen = numeros1[i];
        }
    }
    for (let i = 0; i < numeros2.length; i++) {
        if (numeros2[i] > almacen) {
            almacen = numeros2[i];
        }
    }
    return almacen
}
let numeroMayor = calcularMayor(lista1, lista2);
console.log(`El numero mayor utilizando funciones es: ${numeroMayor}`)

let almacen1 = 0;
const calcularMayorFlecha = (numero1, numero2) => {
    for (let i = 0; i < numero1.length; i++) {
        if (numero1[i] > almacen1) {
            almacen1 = numero1[i];
        }
    }
    for (let i = 0; i < numero2.length; i++) {
        if (numero2[i] > almacen1) {
            almacen1 = numero2[i];
        }
    }
    return almacen1
}

let numeroMayor2 = calcularMayor(lista1, lista2);
console.log(`El numero mayor utilizando funcion flecha es: ${numeroMayor2}`)

// 3 vectores, v1 v2 y v3 tienen 3 string, Si la variable spiderman está en peligro debe lanzar el mensaje 
//"como decía el tio ben, ten ciudado con el duende verde"
// si no esta en peligro escribir "como decia el tio ben, un gran poder requiere una gran resposabilidad"
// con funciones flecha
const v1 = "tio ben";
const v2 = "recuerda lo siguiente!";
const v3 = "un gran poder requiere una gran responsabilidad";
const v4 = "ten ciudado con el duende verde";
var peligro1 = 0;
let peligro = "";
//let peligro = prompt("Está Spiderman en Peligro? digite N= NO y S = Si")
const estadoPeligro = (estadoPel) => {
    if (estadoPel == 1) {
        peligro1 = 1;
    } else if(estadoPel == 2){
        peligro1 = 2;
    }
    return peligro1
}


//ingresando en el DOM

const titulo = document.createElement("h1");

titulo.textContent = "Hola Soy Spiderman";
document.body.appendChild(titulo);

const boton = document.createElement("button");
boton.innerText = "Peligro";
boton.style.color = "White";
boton.style.background = "blue";
document.body.appendChild(boton)

const boton2 = document.createElement("button");
boton2.innerText = "No peligro";
boton2.style.color = "White";
boton2.style.background = "red";
document.body.appendChild(boton2)

boton.addEventListener("click", () => {
    document.body.innerHTML = `<h1> Corre spiderman</h1>`;
    peligro = 1;
    console.log (peligro);
})

boton2.addEventListener("click", () => {
    document.body.innerHTML = `<h1> Estas seguro</h1>`;
    peligro = 2;
    console.log (peligro);
})

var estadoSpiderman = estadoPeligro(peligro);
if (estadoSpiderman == 1) {
    alert(`Como decia el ${v1}, ${v2} ${v4}`);
} else if (estadoSpiderman == 2){
    alert(`Como decia el ${v1}, ${v3}`);
}
console.log(peligro1)

const botonNombre = document.createElement("button");
botonNombre.innerText="nombre";
botonNombre.addEventListener("click", ()=>{
    let entrada = document.getElementById("name");
    let valorEntrada = entrada.value;
    if (valorEntrada.trim().length == 0){
        alert("No se ha digitado valor alguno");
    } else {
        alert(`Se ha digitado ${valorEntrada}`);
    }
})
document.body.appendChild(botonNombre);