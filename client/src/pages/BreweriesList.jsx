import { useState, useEffect } from 'react'
import  useFetchBreweriesList from "../hooks/useFetchBreweriesList"
import BreweriesListItem from '../components/BreweriesListItem';
import BreweriesListInputs from '../components/BreweriesListInputs';


const BreweriesList = ()=>{
  const [breweryPage, setBreweryPage] = useState(1)
  const [breweryParams, setBreweryParams] = useState({
    search: "",
    state: "none",
    type: "none",
    us_only: false
  })


  const breweries = useFetchBreweriesList(breweryParams, breweryPage, setBreweryPage)

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
      <BreweriesListInputs breweryParams={breweryParams} setBreweryParams={setBreweryParams}   setBreweryPage={setBreweryPage}/>
      <br></br>
      <div className='grid gap-4 auto-cols-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5'>
        {breweries && breweries.map((brewery) => {
          return (<BreweriesListItem key={brewery.id} brewery={brewery}/>)
        })
        }
      </div>
      {breweries && breweries.length<1 &&
        <h2 className="text-forest font-semibold text-xl p-16">No Breweries Found</h2>
      }
      <br></br>
      <div>
        <button className="mx-2" onClick={prevPage}>Previous</button>
        <button className="mx-2" onClick={nextPage}>Next</button>
      </div>
    </div>
  )
}

export default BreweriesList