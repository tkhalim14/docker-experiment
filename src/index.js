const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors({
    origin: '*',
}));

app.set('view engine', 'ejs');

let counter = 0;

app.get('/', cors(), (req,res) => {
    // console.log(req);
    counter = counter + 1;
    res.json({"message": `Loving the node.js + react.js project... ${counter} times.`});
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on port:${port}`));