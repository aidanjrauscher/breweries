const fetch = require('node-fetch');
const fs = require("fs")

const getBreweries = async ()=>{
  let breweries = []
  for (let page=1; page<410; page++){
    const response = await fetch(`https://api.openbrewerydb.org/breweries?page=${page}`)
    const json = await response.json()
    breweries = breweries.concat(json)
  }

  let breweriesString = JSON.stringify(breweries)
  fs.writeFileSync("./breweries.json", breweriesString)
}

getBreweries()