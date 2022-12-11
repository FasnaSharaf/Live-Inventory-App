const express = require("express");
const mongoose = require("mongoose");
const { db } = require("./model/ret.js");
const app = express();
const retailer = require("./model/ret.js");
const bodyParser = require("body-parser");
const { name } = require("ejs");
const retailerRegister = require("./model/reg");

const store2 = require("./model/store2");

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on : http://localhost:3000/");
});

mongoose.set("strictQuery", false);

const uri =
"mongodb+srv://manikandan2004:Manikandan999@cluster0.lo8dn30.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connected to MongoDB ");
  } catch (Error) {
    console.error(Error);
  }
}

connect();

app.use(express.static("public"));

app.get("/item", (req, res) => {
  retailer
    .find({}, function (err, retailers) {
      res.render("index.ejs", {
        List: retailers,
      });
    })
    .sort({ createdAt: -1 });
});

app.get("/user", function (req, res) {
  retailer
    .find({}, function (err, retailers) {
      res.render("customer.ejs", {
        List: retailers,
      });
    })
    .sort({ createdAt: -1 });
});

app.post("/user", (req, res) => {
  retailer
    .find({ item: req.body.item }, function (err, retailers) {
      res.render("customer.ejs", {
        List: retailers,
      });
    })
    .sort({ createdAt: -1 });
});

app.get("/", (req, res) => {
  res.render("web.ejs");
});

app.post("/", (req, res) => {
  const createDoc = async () => {
    try {
      const data = new retailer({
        unique_id: req.body.unique_id,
        shopName: req.body.shop_name,
        item: req.body.shop_items,
        quanity: req.body.item_quantity,
      });

      const doc = await data.save();
      console.log(doc);
    } catch (err) {
      console.error(err);
    }
  };
  createDoc();
  res.redirect("/");
});

app.get("/reg", (req, res) => {
  res.render("reg.ejs");
});

app.get("/map", (req, res) => {
  res.render("map.ejs");
});

app.post("/reg", (req, res) => {
  const createDoc = async () => {
    try {
      const data = new retailerRegister({
        unique_id: req.body.unique_id,
        shopName: req.body.shop_name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        username: req.body.username,
        password: req.body.password,
      });

      const doc = await data.save();
      console.log(doc);
    } catch (err) {
      console.error(err);
    }
  };
  createDoc();
  res.redirect("/item");
});

const data = new store2({
  item: "brush",
  quanity: "300",
});
data.save();

app.delete("/:id", (req, res) => {
  const id = req.params.id;

  const myresponse = {
    status: "success",
  };

  retailer.findByIdAndDelete("6394974f22966afb495804f3", (err, re) => {
    console.log(err, re);
  });
  //  .then(result => {

  //   //  res.json(result)
  //    console.log('hi');
  //  })
  //  .catch(err => console.log(err))
  //  res.redirect("/");
});



app.get("/store", (req, res) => {
  retailerRegister
    .find({ item: req.body.item }, function (err, retailersReg) {
      res.render("store.ejs", {
        Field: retailersReg,
      });
    })
    .sort({ createdAt: -1 });
});


app.post("/user", (req, res) => {
  retailer.find({ item: req.body.item }, function (err, retailers) {
 List: retailers

    })
    .sort({ createdAt: -1 });
});

// app.post("/user", (req, res) => {
//   retailerRegister.find({ item: req.body.stuff }, function (err, retailerRegister) {
// res.render('/user')
// regiii: retailerRegister,
//     })
//     .sort({ createdAt: -1 });
// });