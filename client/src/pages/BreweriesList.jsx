import { useState, useEffect } from 'react'
import BreweriesListItem from '../components/BreweriesListItem';
import BreweriesListInputs from '../components/BreweriesListInputs';


const BreweriesList = ()=>{
  const [breweries, setBreweries] = useState([]);
  const [breweryPage, setBreweryPage] = useState(1)
  const [breweryParams, setBreweryParams] = useState({
    search: "",
    state: "none",
    type: "none",
    us_only: false
  })

  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/breweries?page=${breweryPage}&query=${breweryParams.search}&type=${breweryParams.type}&state=${breweryParams.state}&us_only=${breweryParams.us_only}`)
      const json = await response.json()
      if (json == []) {
        setBreweryPage(breweryPage - 1)
      }
      setBreweries(json)
    }

    fetchBreweries()
  }, [breweryPage, breweryParams])
  

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
        <h1 className="text-4xl font-bold" >Breweries</h1>
      </div>
      <br></br>
      <BreweriesListInputs breweryParams={breweryParams} setBreweryParams={setBreweryParams}/>
      <br></br>
      {/* <div className='flex flex-wrap space-x-4 space-y-4 justify-center'> */}
      <div className='grid gap-4 auto-cols-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {breweries && breweries.map((brewery) => {
          return (<BreweriesListItem key={brewery.id} brewery={brewery}/>)
        })
        }
      </div>
      <br></br>
      <div>
        <button className="mx-2" onClick={prevPage}>Previous</button>
        <button className="mx-2" onClick={nextPage}>Next</button>
      </div>
    </div>
  )
}

export default BreweriesList