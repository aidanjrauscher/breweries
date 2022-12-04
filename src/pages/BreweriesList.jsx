import { useState, useEffect } from 'react'
import BreweriesListItem from '../components/BreweriesListItem';

const BreweriesList = ()=>{
  const [breweries, setBreweries] = useState([]);
  const [breweryPage, setBreweryPage] = useState(1)

  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await fetch(`https://api.openbrewerydb.org/breweries?page=${breweryPage}`)
      const json = await response.json()
      if (json == []) {
        setBreweryPage(breweryPage - 1)
      }
      setBreweries(json)
    }

    fetchBreweries()
  }, [breweryPage])

  const nextPage = () => {
    setBreweryPage(breweryPage + 1)
  }

  const prevPage = () => {
    if (breweryPage > 1) {
      setBreweryPage(breweryPage - 1)
    }
    else {
      setBreweryPage(1)
    }
  }

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">Breweries</h1>
      </div>
      {breweries && breweries.map((brewery) => {
        return (<BreweriesListItem key={brewery.id} brewery={brewery}/>)
      })
      }
      <div>
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  )
}

export default BreweriesList