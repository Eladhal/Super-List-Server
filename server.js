const db = require("./db");
const path = require('path');
const mongoose = require('mongoose');
const express = require("express");
const app = express();

mongoose.connect("mongodb://localhost:27017/superMarkets");
const DB = mongoose.connection;
DB.on("error", console.error.bind(console, "MongoDB connection error:"));
const schema = mongoose.Schema;
const superSchema = new schema({
    id: Number,
    size: String,
    numOfEmployees: Number,
    brand: String,
    owner: String,
    info: String
});
const superModel = mongoose.model("superModel", superSchema);

app.use(express.json());
app.use(express.static(path.join(__dirname, "Public")));

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.route("/api/super-list")
    .get((req, res) => {
        superModel.find().then( doc => {
         res.send(JSON.stringify(doc));
        });
    })
    .post((req, res) => {
        const Super = req.body;
        superModel.count({}, (err, count) => {
        Super.id = count + 1;
        let newSuper = new superModel(Super);
        newSuper.save();
        res.send(Super);
        });
    });

app.route("/api/super-list/:id")
    .put((req, res) => {
        const id = parseInt(req.params.id);
        superModel.findOne({"id": id}, (err,doc) => {
            if (err) {
                console.log("failed to update document");
            }
            else{
                doc.owner = req.body.owner;
                doc.brand = req.body.brand;
                doc.size = req.body.size;
                doc.numOfEmployees = req.body.numOfEmployees;
                doc.info = req.body.info;
                doc.save();
                res.send(req.body);
            }
        });
    })
    .delete((req, res) => {
        const id = parseInt(req.params.id);
        superModel.remove({ "id": id}, function(err) {
            if (err) {
                console.log("Failed to delete document");
            }
            else {
                res.json("Delete document success");
            }
        });
    });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "Public/index.html"));
});

app.listen(3000, () => console.log("Post API server listening on port 3000!"));