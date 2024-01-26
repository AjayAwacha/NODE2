const express = require('express');

const app = express();

app.use(express.json());

const port = 5678;

app.get('/', (req, res) => {
    res.status(200).json({message: 'Get Request ', app: 'express'});
})

app.post('/', (req, res) => {
    const body = req.body;
    res.status(200).json({message: `Post Request Body : ${body}`, app: 'express'});
})

app.listen(port, () => {
    console.log(`server listen on port ${port}`);
})