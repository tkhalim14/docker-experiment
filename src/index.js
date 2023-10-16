const app = require('express')();

app.get('/', (req,res) => {
    // console.log(req);
    res.render('home');
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`app listening on port:${port}`));