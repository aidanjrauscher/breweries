require("dotenv").config()
const breweries = require("../models/breweries.json")
const brewery = require("../models/Brewery")
const dbConnect = require("../db/dbConnect")

const populateBreweries = async ()=>{
  try{
    await dbConnect(process.env.MONGODB_URL)
    console.log(breweries)
    await brewery.create(breweries)
    process.exit(0)
  }
  catch(error){
    console.log(error)
    process.exit(1)
  }
}

populateBreweries()