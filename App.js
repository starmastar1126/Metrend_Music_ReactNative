const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const routes = require("./routes/routes");
const app = express();

app.use("/content", express.static(path.join(__dirname, 'public/content')));
app.use("/trailers", express.static(path.join(__dirname, 'public/trailers')));
app.use("/thumbnails", express.static(path.join(__dirname, 'public/thumbnails')));
app.use("/posters", express.static(path.join(__dirname, 'public/posters')));
app.use("/", express.static(path.join(__dirname, 'src/metrend-web')));


app.use(bodyParser.json({limit:'10000mb'}));
app.use(bodyParser.urlencoded({limit: '10000mb', extended: true}));
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api', routes);
app.get('/',function(req,res){
    res.sendFile(path.join("/home/ubuntu/metrend-backend/src/metrend-web/login.html"));
});

module.exports = app;
