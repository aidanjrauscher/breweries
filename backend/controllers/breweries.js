const Brewery = require("../models/Brewery")

const getBreweryList = async(req,res)=>{
  const {page, per_page, query, type, state, us_only} = req.query
  const breweryQuery = {}
  if(query){
    breweryQuery.name = {$regex: query, $options: "i"}
  }
  if(type && type!="none"){
    breweryQuery.brewery_type = type
  }
  if(state && state!="none"){
    const formattedState = state.replaceAll("_", " ")
    breweryQuery.state = {$regex: formattedState, $options: "i"}
  }
  if(us_only && us_only==="true"){
     breweryQuery.country = "United States"
  }
  let breweryResult =  Brewery.find(breweryQuery).select(['-_id','-__v']).sort("name")

  let perPage = parseInt(per_page) || 20
  let pageNumber = parseInt(page) || 1
  const breweriesOffset = (pageNumber - 1) * perPage
  breweryResult = breweryResult.skip(breweriesOffset).limit(perPage)
  const breweries = await breweryResult
  res.status(200)
  res.json(breweries)
}

const getSingleBrewery = async(req,res)=>{
  const {breweryID} = req.params
  const brewery = await Brewery.findOne({
    id : breweryID
  }).select(['-_id','-__v'])
  if(!brewery){
    res.json({msg: `Brewery with ID ${breweryID} does not exist.`})
  }
  else{
    res.status(200)
    res.json(brewery)
  }
}

module.exports = {
  getBreweryList,
  getSingleBrewery
}