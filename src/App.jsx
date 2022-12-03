import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
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
      console.log(json)
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
      </div>
      {breweries && breweries.map((brewery) => {
        if (brewery.website_url) {
          return <p key={brewery.id}><a href={brewery.website_url} target="_blank">{brewery.name}</a></p>
        }
        else {
          return <p key={brewery.id}>{brewery.name}</p>
        }
      })
      }
      <div>
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  )
}