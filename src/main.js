import { posicion } from "./object.js"
import { pintarFigurasDesordenadas } from "./desordenar.js"

const div = document.querySelector(".container__elementos");
const botonOrdenar = document.querySelector(".boton__ordenar");
const botonDesordenar = document.querySelector(".boton__desordenar");
const uno = document.querySelector("#uno");
const dos = document.querySelector("#dos");
const tres = document.querySelector("#tres");
const cuatro = document.querySelector("#cuatro");
const cinco = document.querySelector("#cinco");
const seis = document.querySelector("#seis");
const siete = document.querySelector("#siete");
const ocho = document.querySelector("#ocho");
const nueve = document.querySelector("#nueve");
const diez = document.querySelector("#diez");

// Desordena las figuras utilizando librería.
let posicionDesordenada = _.shuffle(posicion);


// Ordena el array de objetos.
const ordenaElArray = (array) => {
    const arrayOrdenado = array.sort((a, b) => {
        if (a.value > b.value) {
            
            return 1;
            
        }
        if (a.value < b.value) {
            return -1;
        }
        return 0;
    });
    pintarFigurasDesordenadas(arrayOrdenado);
    
};

botonOrdenar.addEventListener("click", () => {
    ordenaElArray(posicionDesordenada);
});

botonDesordenar.addEventListener("click", () => {
    pintarFigurasDesordenadas(posicionDesordenada);
});

