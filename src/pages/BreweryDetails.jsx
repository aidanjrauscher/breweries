import React from "react";
import { useState, useEffect } from 'react'
import BreweriesDetailsItem from "../components/BreweryDetailsItem";
import {useParams} from "react-router-dom"

const BreweriesDetails = ()=>{
  const {breweryID} = useParams();
  const [brewery, setBrewery] = useState({});

  useEffect(() => {
    const fetchBrewery = async () => {
        const response = await fetch(`https://api.openbrewerydb.org/breweries/${breweryID}`)
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
    <BreweriesDetailsItem brewery={brewery}/>
  )
}

export default BreweriesDetails