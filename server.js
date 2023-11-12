const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl.js");
const dotenv = require('dotenv')

dotenv.config({
  path:'./env'
})

const app = express();

const connectDB = async ()=>{
  try {
    const connectionInstance= await mongoose.connect(`mongodb://localhost/27017`)
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("mongodb connection failed at db/index.js", error);
    process.exit(1);
  }
}

connectDB();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => { 
  const shortUrls = await ShortUrl.find();
  // console.log(shortUrls);
  res.render("index", { shortUrls: shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
 
  console.log(`after hitting short url`,shortUrl);
  if (shortUrl == null) return res.sendStatus(404);
  shortUrl.clicks++;
  shortUrl.save();
  res.redirect(shortUrl.full);
});

app.listen(process.env.PORT || 3000, ()=>{
console.log(`server is up and running at port number ${process.env.PORT}`)
})