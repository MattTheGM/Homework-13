const express = require("express");
const exphbs = require("express-handlebars");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;


app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// If Handlebars logic worked, it would be here:

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
// app.use(express.static("public"));

require("./controllers/burgers_controller")(app);


app.listen(PORT, () => { console.log("App listening on PORT: " + PORT) });