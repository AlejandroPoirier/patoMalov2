const path = require("path");

const express = require("express");

const PhoneNumberController = require("../controllers/PhoneNumberController");

const router = express.Router();

router.get("/", PhoneNumberController.getHome);

router.get("/search", PhoneNumberController.buscarComentarios);

router.get("/sendEmail", PhoneNumberController.sendEmail);

module.exports = router