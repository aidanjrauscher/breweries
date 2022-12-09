import React from 'react'
import { Link } from 'react-router-dom';

const BreweriesListItem = ({brewery})=>{
  return (
      <div className="border border-forest border-2 p-4 rounded-md w-fit">
          <div>
            <h3>{brewery.brewery_type}</h3>
            <h2 className="font-semibold text-2xl">{brewery.name}</h2>
            {brewery.website_url && 
              <a href={brewery.website_url} target="_blank" className="text-sm hover:underline hover:text-forest">{brewery.website_url}</a>
            }
            <p className="text-sm">{brewery.street ? `${brewery.street},`:""} {brewery.city}, {brewery.state} {brewery.postal_code}</p>
          </div>
          <div>
            <Link className="" to={`/brewery/${brewery.id}`}> 
              <button className="bg-blue-600 px-1 py-1">Details</button>
            </Link>
          </div>
      </div>
  )
}

export default BreweriesListItem