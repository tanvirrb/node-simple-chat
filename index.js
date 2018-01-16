let express = require('express');

//App setup
let app = express();

let server = app.listen(4000, function () {
    console.log("Listening to requests on port 4000");
});

//Static files
app.use(express.static('public'));