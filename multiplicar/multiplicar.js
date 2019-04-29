//requires
const fs = require('fs');

const colors = require('colors');

let listar = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`BASE:  El valor introducido ${base} no es un Número`);
            return;
        }

        if (!Number(limite)) {
            reject(`Limite: El valor introducido ${limite} no es un Número`);
            return;
        }

        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'.green);
        console.log(`@@@@@@@@@TABLA de ${base}  @@@@@@@@@@@@@@@@@@@@@@@`.green);
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'.green);
        for (let i = 1; i <= limite; i++) {

            let resultado = base * i;

            console.log(`${base} * ${i} = ${resultado}`);
        }


    });

}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        let datos = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un Número`);
            return;
        }
        if (!Number(limite)) {
            reject(`Limite: El valor introducido ${limite} no es un Número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {

            let resultado = base * i;

            //console.log(`${base} * ${i} = ${resultado}`);

            datos += `${base} * ${i} = ${resultado}\n`;

        }


        const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listar
}