//userRoutes.js
const express = require('express');
const router = express.Router();


router.get('/get/:userid', (req, res) => {
    let userid = req.params.userid;
    console.log(userid);
    res.status(200).json({ msg: `Get userid: ${userid} `});
});


router.get('/get', (req, res) => {
    const { username, password } = req.query;
    console.log(username, password);
    res.status(200).json({ msg: `Get username: ${username} , password: ${password}` });
});


router.post('/create', (req, res) => {
    const { username, password } = req.body;
    res.status(201).json({ 
        username, 
        password
    })
});


router.put('/update', (req, res) => {
    const { username, password } = req.body;
    res.status(200).json({ 
        username, 
        password
    })
});


router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;

    console.log(id);
    res.status(200).json({ msg:`delete user: ${id}` });
});


module.exports = router;