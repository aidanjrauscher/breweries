import React from "react";
import { useState, useEffect } from 'react'
import {useParams, Link} from "react-router-dom"


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
      <h1 className="text-6xl pb-8">{brewery.name}</h1>
      <div id="BreweryDetails" className="grid sm: grid-cols-1 md:grid-cols-2 gap-10 w-100%">
        <div className="col-span-1 flex justify-center items-center"><BreweriesDetailsItem brewery={brewery}/></div>
        <div className="col-span-1">{brewery.id && <BreweryMap brewery={brewery}/>}</div>
      </div>
      <p className="pt-8 text-2xl font-bold"><Link to={`/`} className="hover:text-forest">{"\u2190"} Back to List</Link></p>
    </div>
  )
}

export default BreweriesDetails