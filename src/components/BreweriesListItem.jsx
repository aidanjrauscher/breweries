import React from 'react'
import { Link } from 'react-router-dom';

const BreweriesListItem = ({brewery})=>{
  console.log(brewery.name)
  return (
    <div>
      <p><Link to={`/brewery/${brewery.id}`}>{brewery.name}</Link></p>
    </div>
  )
}

export default BreweriesListItem