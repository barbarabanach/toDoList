const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({extended: true}));
//adding ejs
app.set('view engine', 'ejs');

const port = 3000;

app.get('/', (req, res) => {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindOfDay: day, newListItem: items });
})

app.post('/', (req, res) =>  {

    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})