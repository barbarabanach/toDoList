const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//adding ejs
app.set('view engine', 'ejs');

const port = 3000;

app.get('/', (req, res) => {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindOfDay: day, newListItem: items });
})

app.post('/', (req, res) =>  {

    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})