import { useState, useEffect } from "react";

const useFetchBreweriesList = (breweryParams, breweryPage, setBreweryPage)=>{
  const [breweries, setBreweries] = useState([])
  const url = `${import.meta.env.VITE_BACKEND_URL}/api/breweries?page=${breweryPage}&query=${breweryParams.search}&type=${breweryParams.type}&state=${breweryParams.state}&us_only=${breweryParams.us_only}`
  console.log(url)
  useEffect(()=>{
    const fetchBreweriesList = async()=>{
      const response = await fetch(url)
      const json = await response.json()
      console.log(json)
      if (json.length<1) {
        setBreweryPage(breweryPage==1 ? breweryPage : breweryPage-1)
      }
      else{
        setBreweries(json)
      }
    }
    fetchBreweriesList()
  }, [breweryParams, breweryPage])

  return breweries
}

export default useFetchBreweriesList