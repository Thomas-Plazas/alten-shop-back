const express = require('express');
const products = require('../prisma/models/product');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        console.log("get all products");
        let all_products = await products.findAll();
        res.status(200).json(all_products);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let product = await products.findById(parseInt(req.params.id));
        res.status(200).json(product);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    try {
        let product = await products.create(req.body);
        res.status(200).json(product);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        let product = await products.update(parseInt(req.params.id), req.body);
        res.status(200).json(product);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let product = await products.remove(parseInt(req.params.id));
        res.status(200).json(product);
    }
    catch (error){
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;