import React from 'react'
import { Link } from 'react-router-dom';


const BreweriesDetailsItem = ({brewery})=>{
  return (
    <div className="bg-forest border border-magnolia border-4 w-4/6 py-16 rounded-2xl ">
      {brewery.msg && <h1>{brewery.msg}</h1>}
      
      <h3 className="text-2xl font-semibold">{brewery.brewery_type} Brewery</h3>

      <p className="pt-2 pb-0 text-lg text-xl font-semibold">{brewery.street ? `${brewery.street},`:""}</p>
      <p className="pb-2 pt-0 text-lg text-xl font-semibold">{brewery.city ? `${brewery.city},`:""} {brewery.state} {brewery.postal_code}</p>

      {brewery.website_url && <p>
        <a href={brewery.website_url} target="_blank">
          <button className="bg-blue-600 font-thin m-2">Brewery Website</button>
        </a>
      </p>}
    </div>
  )
}

export default BreweriesDetailsItem