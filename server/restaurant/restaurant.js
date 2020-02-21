/**
 * MODULOS NODE
 */
const axios = require('axios'),
    express = require('express'),
    bodyParser = require('body-parser');

/**
 * CONSTANTES Y GLOBALES
 */
const port = require('../../config/ports'),
    delay = require('../../config/delay').delay,
    app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



/**
 * PROCESAR ORDEN
 */
app.post('/restaurant', (req, res) => {
    let body = req.body.data;
    console.log('/********************/');
    console.log('RESTAURANT');
    console.log(body);
    console.log('Processing order...');
    delay(2000);

    switch (body.from) {
        case 'client':
            body.from = 'restaurant'
            body.to = 'delivery'
            console.log(body);
            console.log(`start delivering order ${body.order}`);
            delay(2000);
            break;
        case 'delivery':
            body.from = 'restaurant'
            body.to = 'client'
            console.log(body);
            delay(2000);
            console.log(`Notify client end of order ${body.order}`);
            break;
        default:
            console.log('error restaurant');

    }
    axios.post(`http://localhost:${port.EBS_PORT}/esb`, {
        data: body
    });

    res.status(200).json({
        message: 'End of transaction...'
    });

});




/**
 * SERVICIO DE RESTAURANTE
 */
app.listen(port.RESTAURANT_PORT, () => {
    console.log(`Restaurant: port ${port.RESTAURANT_PORT}`);
});