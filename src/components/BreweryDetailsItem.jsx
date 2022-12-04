import React from 'react'


const BreweriesDetailsItem = ({brewery})=>{
  return (
    <div>
      <h1>{brewery.name}</h1>
      {brewery.website_url && <p><a href={brewery.website_url} target="_blank">Brewery Website</a></p>}
      {brewery.msg && <h1>{brewery.msg}</h1>}
    </div>
  )
}

export default BreweriesDetailsItem