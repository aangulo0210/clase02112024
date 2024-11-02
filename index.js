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
    if (lista1[i]>guardar1) {
        guardar1 = lista1[i];
    }  
}
for (let i = 0; i < lista2.length; i++) {
    if (lista2[i]>guardar1) {
        guardar1 = lista2[i];
    }  
}
alert(`El valor mayor es ${guardar1}`)

