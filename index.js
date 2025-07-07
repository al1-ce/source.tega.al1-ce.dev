const express         = require("express");
const path            = require("path");

const app = express();

app.use( "/", express.static(path.join(__dirname, "public"), { extensions: ["html", "htm"] }));
app.all("*", (_, res) => { res.status(404).sendFile(path.join(__dirname, "public/404.html")); });

const port = process.env.PORT || 3000;

app.listen(port, (err, res) => {
    if (err) {
        console.log(err);
        return res.status(500).send(err.message);
    } else {
        console.log('[INFO] Server Running on port:', port);
    }
});

module.exports = app;
