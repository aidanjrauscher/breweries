const { getBreweryList, getSingleBrewery } = require("../controllers/breweries")
const express = require("express")

const router = express.Router()

router.route("/").get(getBreweryList)

router.route("/:breweryID").get(getSingleBrewery)

module.exports = router