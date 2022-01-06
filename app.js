const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
//adding ejs
app.set('view engine', 'ejs');

const port = 3000;

app.get('/', (req, res) => {

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    // if(currentDay === 6 || currentDay == 0) {
    //     day = "Weekend";
    // } else {
    //     day = "Weekday";
    // }

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wendsday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            console.log(`Sorry, we are out of ${currentDay}.`);
    }


    res.render("list", { kindOfDay: day });
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})