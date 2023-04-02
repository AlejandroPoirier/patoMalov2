const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require('dotenv').config();


const PhoneNumber = require('./models/PhoneNumber');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

const mainPageRoutes = require("./routes/mainpage");
app.use("/", mainPageRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    PhoneNumber.find().then((result) => {
      if (result.length === 0) {
        const dummyData = new PhoneNumber({
          number: '+56965512888',
          comments: ['This is the number of the page creator','This is just some dummy data for test purposes']
        });
        dummyData.save().then(() => {
          console.log("Dummy phone number created!");
        });
      }
      // app.listen(process.env.HOST, () => {
      //   console.log("Server started on port 3000!");
      // });
      app.listen(process.env.HTTP_PORT, process.env.IP);
      app.on('listening', () => console.info(`Node App running at http://${process.env.IP}:${process.env.HTTP_PORT}`));
    });
  })
  .catch(err => {
    console.log(err);
  });


