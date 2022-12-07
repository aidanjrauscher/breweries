import React from "react";
import { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"

import BreweriesDetailsItem from "../components/BreweryDetailsItem";
import BreweryMap from "../components/BreweryMap";


const BreweriesDetails = ()=>{
  const {breweryID} = useParams();
  const [brewery, setBrewery] = useState({});

  useEffect(() => {
    const fetchBrewery = async () => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breweries/${breweryID}`)
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
  }, [])
  return(
    <div id="BreweryDetails" className="grid grid-cols-2 gap-20 w-100% content-center">
      <div><BreweriesDetailsItem brewery={brewery}/></div>
      {brewery.id && <BreweryMap brewery={brewery}/>}
    </div>
  )
}

export default BreweriesDetails