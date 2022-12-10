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
    <div>
      <h1 className="text-3xl">{brewery.name}</h1>
      <div id="BreweryDetails" className="grid sm:grid-cols-1 md:grid-cols2 gap-20 w-100%">
        <div><BreweriesDetailsItem brewery={brewery}/></div>
        {brewery.id && <BreweryMap brewery={brewery}/>}
      </div>
    </div>
  )
}

export default BreweriesDetails