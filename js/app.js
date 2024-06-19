
const operadores = ['+', '-', '*', '/', '(', ')'];

function agregarNumero(value) {
    const pantalla = document.getElementById('pantalla');
    pantalla.value += value;
}

function agregarOperador(value) {
    const pantalla = document.getElementById('pantalla');
    const ultimoCaracter = pantalla.value.slice(-1);

    if (!operadores.includes(ultimoCaracter) || value === '(' || value === ')') {
        pantalla.value += value;
    } else {
        pantalla.value = pantalla.value.slice(0, -1) + value;
    }
}

function agregarFuncion(func) {
    const pantalla = document.getElementById('pantalla');
    const ultimoCaracter = pantalla.value.slice(-1);

    if (!operadores.includes(ultimoCaracter) && pantalla.value !== '') {
        pantalla.value += '*' + func;
    } else {
        pantalla.value += func;
    }
}

function agregarConstante(constante) {
    const pantalla = document.getElementById('pantalla');
    const ultimoCaracter = pantalla.value.slice(-1);

    if (!operadores.includes(ultimoCaracter) && pantalla.value !== '') {
        pantalla.value += '*' + constante;
    } else {
        pantalla.value += constante;
    }
}

function limpiarPantalla() {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = '';
}

function calcular() {
    const pantalla = document.getElementById('pantalla');
    try {
        let resultado = eval(pantalla.value);
        if (typeof resultado === 'number') {
            if (Number.isInteger(resultado)) {
                pantalla.value = resultado;
            } else {
                pantalla.value = resultado.toFixed(6);
            }
        }
    } catch (e) {
        pantalla.value = 'Error';
    }
}
