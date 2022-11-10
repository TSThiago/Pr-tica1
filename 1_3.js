// 
// Parte 1:
// 

// 1 - Se caminho 5Km e corro 2Km, passo o dia bem.

var caminho = '5Km'
var corro = '2Km'

if(caminho === '5Km' && corro === '2Km'){
    console.log("Passo o dia bem.")
}

// 2 - Se levanto cedo OU antes das 8, saio tranquilo.

var levanto = 'cedo'

if(levanto === 'cedo' || levanto === 'antes das 8'){
    console.log("Saio tranquilo.")
}

// 3 - Se NÃO termino o trabalho ou NÃO tenho compromisso, saio tarde.

var termino = 'o trabalho'
var tenho = 'compromisso'

if(!termino === 'o trabalho' || !tenho === 'compromisso'){
    console.log("Saio tarde.")
}

// 
// Parte 2:
// 

// 1:

var num = 12
var contador = 0

for(var index = 0; index <= num; index++){
    switch (num % index) {
        case 0:
            contador++
            break;
        default:
            break;
    }
}

switch (contador) {
    case 2:
        console.log("Numero primo")
        break;
    default:
        console.log("Não número primo")
        break;
}

// 2:

var hora = 5;
var minutos = 0;

hora > 0 ? minutos = hora*60 : minutos = 60;
console.log(minutos)