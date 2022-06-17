const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help connect to the database
const dbo = require("../db/conn");

// This will help convert the id from string to ObjectId for the _id
const ObjectId = require("mongodb").ObjectId;

// This section will help get a list of all the records
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("scp");
  db_connect
    .collection("scps")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("scps").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help get a random single record by id
recordRoutes.route("/random/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("scps")
    .aggregate([{ $sample: { size: 1 } }], function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help create a new record
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    item: req.body.item,
    name: req.body.name,
    objectclass: req.body.objectclass,
    image: req.body.image,
    description: req.body.description,
    containment: req.body.containment,
  };
  db_connect.collection("scps").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

//This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      item: req.body.item,
      name: req.body.name,
      objectclass: req.body.objectclass,
      image: req.body.image,
      description: req.body.description,
      containment: req.body.containment,
    },
  };
  db_connect
    .collection("scps")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("scps").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
