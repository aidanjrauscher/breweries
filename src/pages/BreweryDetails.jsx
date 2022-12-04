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
      const json = await response.json()
      setBrewery(json)
    }

    fetchBrewery()
  }, [])

  return(
    <BreweriesDetailsItem brewery={brewery}/>
  )
}

export default BreweriesDetails