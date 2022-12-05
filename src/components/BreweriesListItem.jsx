import React from 'react'
import { Link } from 'react-router-dom';

const BreweriesListItem = ({brewery})=>{
  return (
      <div className="border border-gray-800 border-1 p-2">
          <div>
            <p>{brewery.name}</p>
            <p>{brewery.brewery_type}</p>
            {brewery.website_url && 
              <a href={brewery.website_url} target="_blank">{brewery.website_url}</a>
            }
            <p>{brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code}</p>
          </div>
          <div>
            <Link className="text-black" to={`/brewery/${brewery.id}`}> 
              <button className="bg-blue-600">View</button>
            </Link>
          </div>
      </div>
  )
}

export default BreweriesListItem