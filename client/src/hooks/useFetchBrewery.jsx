import { useState, useEffect } from "react";

const useFetchBrewery = (breweryID)=>{
  const [brewery, setBrewery] = useState({})
  const url = `${import.meta.env.VITE_BACKEND_URL}/api/breweries/${breweryID}`

  useEffect(()=>{
    const fetchBrewery = async()=>{
      const response = await fetch(url)
      const status = response.status
      if(status == 200){
        const json = await response.json()
        setBrewery(json)
      }
      else{
        setBrewery({msg: `Cannot find brewery with id: ${breweryID}`})
      }
    }

    fetchBrewery()
  }, [breweryID])

  return brewery
}

export default useFetchBrewery