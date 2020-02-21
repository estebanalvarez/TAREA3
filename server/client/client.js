/**
 * MODULOS NODE
 */
const axios = require('axios'),
    express = require('express'),
    bodyParser = require('body-parser');

/**
 * CONSTANTES Y VARIABLES GLOBALES
 */
const argv = require('../../config/config').argv,
    port = require('../../config/ports');
let comando = argv._[0];

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**
 * COMANDO NODE
 * OBTIENE EL ID DE LA ORDEN A PROCESAR
 */
switch (comando) {
    case 'orden':
        console.log(`Nueva orden no. ${argv._[1]}`);
        console.log('CLIENT');
        axios.post(`http://localhost:${port.EBS_PORT}/esb`, {
            data: {
                order: argv._[1],
                time: new Date(),
                to: 'restaurant',
                from: 'client'
            }
        });

        break;
    default:
        console.log('Comando no soportado...');
        break;

}




/**
 * RUTA /CLIENTE
 * OBTIENE INFORMACION DEL RESTAURANTE AL FINALIZAR LA ORDEN
 * ORDER FINALIZADA.
 */
app.post('/client', (req, res) => {
    let body = req.body;

    console.log(body);
    console.log(` End of order: ${body.data.order} `);

    res.status(200).json({
        message: 'End of transaction'
    });

});


//SERVICIO CLIENTE
app.listen(port.CLIENT_PORT, () => {
    console.log(`Client: port ${port.CLIENT_PORT}`);
});