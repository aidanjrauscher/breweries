import { useState, useEffect } from 'react'
import BreweriesListItem from '../components/BreweriesListItem';
import TextField from '@mui/material/TextField';

const BreweriesList = ()=>{
  const [breweries, setBreweries] = useState([]);
  const [breweryPage, setBreweryPage] = useState(1)
  const [brewerySearch, setBrewerySearch] = useState("")

  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breweries?query=${brewerySearch}&page=${breweryPage}`)
      const json = await response.json()
      if (json == []) {
        setBreweryPage(breweryPage - 1)
      }
      setBreweries(json)
    }

    fetchBreweries()
  }, [breweryPage, brewerySearch])

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

  const searchBreweries = (e) =>{
    setBrewerySearch(e.target.value)
  }

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">Breweries</h1>
        <br></br>
        <TextField
          id="brewery-search"
          label="Search Beweries"
          type="search"
          variant="filled"
          value={brewerySearch}
          onChange={searchBreweries}
        />
      </div>
      <br></br>
      <div className='flex flex-col space-y-5'>
        {breweries && breweries.map((brewery) => {
          return (<BreweriesListItem key={brewery.id} brewery={brewery}/>)
        })
        }
      </div>
      <div>
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  )
}

export default BreweriesList