/*
//por el tipo de etiqueta usando el nombre
const h1 = document.querySelector('h1');
const p= document.querySelector('p');
const parrafo = document.getElementsByClassName('.parrafo');
const pid = document.querySelector('#pid');
const input = document.querySelector('input')

console.log({
    h1,
    p,
    parrafo,
    pid,
    input,
})
//nos da lo que se ingreso al input
console.log(input.value);

h1.innerHTML = 'Patito <br> Feo';

//para leer atributos de los elementos html
h1.getAttribute('')
// para modificar un atributo ej clase (primero el atributo y despues el nuevo valor)
h1.setAttribute('class', 'rojo')

//solo para modificar clases
h1.classList.add ('verde');
h1.classList.remove('rojo');

//para crear un elemento desde cero, solo se ve en consola

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/1676914/pexels-photo-1676914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

pid.append(img); */

const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//cuando se usa addEvent se llama las funciones sin los ()
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    //console.log ({event});
    event.preventDefault();
    const sumaImputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaImputs;
}