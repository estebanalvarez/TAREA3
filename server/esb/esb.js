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
    port = require('../../config/ports'),
    delay = require('../../config/delay').delay;
let comando = argv._[0];

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/esb', (req, res) => {
    let body = req.body.data;
    console.log('/********************/');
    console.log(body);

    switch (body.to) {

        case 'client':
            console.log(`to: ${body.to}`);
            delay(2000);
            axios.post(`http://localhost:${port.CLIENT_PORT}/client`, {
                data: body
            });
            break;
        case 'restaurant':
            console.log(`to: ${body.to}`);
            delay(2000);
            axios.post(`http://localhost:${port.RESTAURANT_PORT}/restaurant`, {
                data: body
            });
            break
        case 'delivery':
            console.log(`to: ${body.to}`);
            delay(2000);
            axios.post(`http://localhost:${port.DELIVERY_PORT}/delivery`, {
                data: body
            });
            break;
        default:
            console.log('error ebs');
            res.status(404).json({
                message: 'ebs conection error'
            });
    }

    res.status(200).json({
        message: 'ebs conection successfull'
    });


});



//SERVICIO CLIENTE
app.listen(port.EBS_PORT, () => {
    console.log(`EBS: port ${port.EBS_PORT}`);
});