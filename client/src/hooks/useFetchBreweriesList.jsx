import { useState, useEffect } from "react";

const useFetchBreweriesList = (breweryParams, breweryPage, setBreweryPage)=>{
  const [breweries, setBreweries] = useState([])
  const url = `${import.meta.env.VITE_BACKEND_URL}/api/breweries?page=${breweryPage}&query=${breweryParams.search}&type=${breweryParams.type}&state=${breweryParams.state}&us_only=${breweryParams.us_only}`
  useEffect(()=>{
    const fetchBreweriesList = async()=>{
      const response = await fetch(url)
      const json = await response.json()
      setBreweries(json)
      
    }
    fetchBreweriesList()
  }, [breweryParams, breweryPage])

  return breweries
}

export default useFetchBreweriesList