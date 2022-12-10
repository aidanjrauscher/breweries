import React from 'react'
import { Link } from 'react-router-dom';

const BreweriesListItem = ({brewery})=>{
  return (
      <div className="border border-forest border-2 rounded-md p-4 space-y-1">
          <div>
            <h3>{brewery.brewery_type}</h3>
            <h2 className="font-semibold text-2xl">{brewery.name}</h2>
            <p className="pt-2 pb-0 text-lg">{brewery.street ? `${brewery.street},`:""}</p>
            <p className="pb-2 pt-0 text-lg">{brewery.city}, {brewery.state} {brewery.postal_code}</p>
            {brewery.website_url && 
              <a href={brewery.website_url} target="_blank" className="text-sm hover:underline hover:text-forest">{brewery.website_url}</a>
            }
          </div>
          <div>
            <Link className="" to={`/brewery/${brewery.id}`}> 
              <button className="bg-blue-600 px-1 py-1 m-2">Details</button>
            </Link>
        
          </div>
      </div>
  )
}

export default BreweriesListItem