const express = require("express");

const router = express.Router();



router.get('/menu1', (req, res) => {
    const model = {
        content: 'Hello from Menu 1'
    }
    res.render('menu1', {model})
});

router.get('/menu2', (req, res) => {
    const model = {
        content: 'Hello from Menu 2'
    }
    res.render('menu2', {model});
});

module.exports = router;