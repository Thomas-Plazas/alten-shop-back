const express = require('express');
const productRoute = require('./product');
const router = express.Router();

router.use('/products', productRoute);

router.get('/', (req, res) => {
    res.send('200');
});

module.exports = router;