/**
 * FUNCION DELAY
 * @param {tiempo en milisegundos} n 
 */
function delay(n) {
    let init_time = new Date().getTime();
    while (true) {
        let curr_time = new Date().getTime();
        if ((init_time + n) == curr_time) {
            break;
        }
    }
}

module.exports = {
    delay
}