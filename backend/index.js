const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    let items = [
        {
            id: 1,
            name: 'Jorge'
        },
        {
            id: 2,
            name: 'Adrian'
        }
    ];
    res.send(items);
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
})

app.listen(3000, () => {
    console.log(`listing on port ${3000}`);
})