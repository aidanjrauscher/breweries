import React from "react";
import { useState } from 'react'
import {useParams, Link} from "react-router-dom"
import useFetchBrewery from "../hooks/useFetchBrewery"
import BreweriesDetailsItem from "../components/BreweryDetailsItem";
import BreweryMap from "../components/BreweryMap";
import Loading from "../components/Loading";


const BreweriesDetails = ()=>{
  const [loading, setLoading] = useState(true)
  const {breweryID} = useParams();
  const brewery = useFetchBrewery(breweryID, setLoading)


  return(
    <div>
      <h1 className="text-6xl pb-8">{brewery && brewery.name}</h1>
      <div id="BreweryDetails" className="grid sm: grid-cols-1 md:grid-cols-2 gap-10 w-100%">
        <div className="col-span-1 flex justify-center items-center">{brewery.id && <BreweriesDetailsItem brewery={brewery}/>}</div>
        <div className="col-span-1">{brewery.id && <BreweryMap brewery={brewery}/>}</div>
      </div>
      {loading && <Loading></Loading>}
      <p className="pt-8 text-2xl font-bold"><Link to={`/`} className="hover:text-forest">{"\u2190"} Back to List</Link></p>
    </div>
  )
}

export default BreweriesDetails