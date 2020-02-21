/**
 * DEFINICION DE COMANDO ORDENAR
 * REALIZA UNA ORDEN EN EL SISTEMA
 */
const ordenar = {
    demand: true,
    alias: 'o',
    desc: 'Comando para realizar orden'
}

/**
 * AGREGAR EL COMANDO A ARGB MEDIANTE YARGS
 */
const argv = require('yargs')
    .command('ordenar', 'Envia una nueva orden.', { ordenar })
    .help()
    .argv;

/**
 * EXPORTAR COMANDO DE NUEVO.
 */
module.exports = {
    argv
}