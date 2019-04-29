const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');
console.log('Argumentos ', argv);

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('Listar');
        listar(argv.base, argv.limite)
            .then(console.log('Se envio el lisato'))
            .catch(e => console.log(e));

        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado - '.inverse, `${ archivo }`.green.bold))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}


//console.log(argv);

//let base = '09';

//console.log(process.argv);

//let argv2 = process.argv;

//console.log(`La base de multiplo es : ${argv.base} y el limite de tuplas es ${argv.limite}`);

//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);