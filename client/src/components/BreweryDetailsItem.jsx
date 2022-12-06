import React from 'react'
import { Link } from 'react-router-dom';


const BreweriesDetailsItem = ({brewery})=>{
  return (
    <div>
      {brewery.msg && <h1>{brewery.msg}</h1>}

      <h1 className="text-xl">{brewery.name}</h1>

      {brewery.website_url && <p>
        <a href={brewery.website_url} target="_blank">Brewery Website</a>
      </p>}

      <p>{brewery.brewery_type}</p>

      <p>{brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code}</p>
      <p><Link to={`/`}>{"\u2190"} Back to List</Link></p>
    </div>
  )
}

export default BreweriesDetailsItem