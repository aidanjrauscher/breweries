import React from 'react'
import { Link } from 'react-router-dom';


const BreweriesDetailsItem = ({brewery})=>{
  return (
    <div>
      {brewery.msg && <h1>{brewery.msg}</h1>}
      
      <h3>{brewery.brewery_type}</h3>

      {brewery.website_url && <p>
        <a href={brewery.website_url} target="_blank">
          <button className="bg-blue-600">Brewery Website</button>
        </a>
      </p>}


      <p className="pt-2 pb-0 text-lg">{brewery.street ? `${brewery.street},`:""}</p>
      <p className="pb-2 pt-0 text-lg">{brewery.city ? `${brewery.city},`:""} {brewery.state} {brewery.postal_code}</p>
      <p><Link to={`/`} className="hover:text-forest">{"\u2190"} Back to List</Link></p>
    </div>
  )
}

export default BreweriesDetailsItem