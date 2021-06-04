const app = require('express')()
require('dotenv').config();


const run = async () => {
    await app.listen(8080, (req, resp) => {
        console.log('Listening on port 8080');
    });
    
    await app.get('/', (req, resp) => resp.send('JEJEJJE'));

    console.log('jejejej');

    return [04, 06, 21];
    
}

run()
.then((obj) => { console.log(obj) });

// Remember that callbacks of a Promise, are called once the async function has finished
// Allowing to get the resolve object of the fulfill Promise as parameter in the first callback

console.log('<<<<<<<<<<<<<<<<<<<<')