const express = require('express');
const router = express.Router();
const shoplist = require('../crud/model.js');
const helper = require('../helpers/helper.js');
module.exports = router;


router.get('/', async (req, res) => {
    await shoplist.getAll()
        .then(shoplist => res.json(shoplist))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    await shoplist.getItem(id)
        .then(shoplist => res.json(shoplist))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
});

router.post('/', helper.validateItem, async (req, res) => {
    await shoplist.addItem(req.body)
        .then(shoplist => res.status(201).json({
            message: `The item ${shoplist.id} has been added`,
            content: shoplist
        }))
        .catch(err => res.status(500).json({ message: err.message }))
});

router.put('/:id', helper.validateItem, async (req, res) => {
    const id = req.params.id;
    await shoplist.updateItem(id, req.body)
        .then(shoplist => res.json({
            message: `The item ${id} has been updated`,
            content: shoplist
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await shoplist.deleteItem(id)
        .then(shoplist => res.json({
            message: `The item ${id} has been deleted`
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
});