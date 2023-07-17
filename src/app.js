const express = require('express');
const app = express();
const port = 3000;
const jsonParser = express.json();
const apiRoute = require('../routes/api');

app.use('/api', jsonParser, apiRoute);

app.use(express.urlencoded({
    extended: true
}));

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
