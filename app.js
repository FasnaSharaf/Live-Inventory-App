const express = require('express');
const mongoose = require('mongoose');
const { db } = require('./model/ret.js');
const app = express();
const retailer = require('./model/ret.js');
const bodyParser = require("body-parser");
const { name } = require('ejs');

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, ()=> {
  console.log("Server is running on : http://localhost:3000/");
});


mongoose.set('strictQuery', false);

const uri = 'mongodb+srv://raspberry:TJPmCtVfR8eKonmB@cluster1.enfdems.mongodb.net/?retryWrites=true&w=majority'


async function connect(){
  try{
    await mongoose.connect(uri);
    console.log("connected to MongoDB ")
  }
  catch(Error){
    console.error(Error);  
  }
}

connect();

app.use(express.static('public'))


app.get("/",  (req, res) => {

  retailer.find({}, (id)=>{
    res.render("index.ejs", {
      userName: id
    });
  })

});

app.get("/user", (req, res) => {
  res.render("customer.ejs");
});



// const createDoc = async () =>{
//   try{
//     const data = new retailer({

//       shopName: "marutu store",
//     item: "bottle",
//     quanity: 34,
//     })
    
//     const doc = await data.save();
//     console.log(doc);
//   }
//   catch(err){
//     console.error(err);
//   }
// }
// createDoc();

app.post("/", (req , res) =>{
  const createDoc = async () =>{
    try{
      const data = new retailer({
  
      shopName: req.body.shop_name,
      item: req.body.shop_items,
      quanity: req.body.item_quantity,
      })
      
      const doc = await data.save();
      console.log(doc);
    }
    catch(err){
      console.error(err);
    }
  }
  createDoc()
  res.redirect("/");
})

