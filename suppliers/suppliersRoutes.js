const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Greetings, supplier!"
    })
})

router.get('/name', (req, res) => {
    const name = req.body
    res.status(200).json({
        message: `Well hey there, ${name}.`
    })
})
