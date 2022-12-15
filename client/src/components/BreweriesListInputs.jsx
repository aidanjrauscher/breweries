const BreweriesListInputs = ({breweryParams, setBreweryParams, setBreweryPage, styles})=>{
  const searchBreweries = (e) =>{
    setBreweryParams({
      ...breweryParams,
      search: e.target.value,
    })
    setBreweryPage(1)
  }

  const filterBreweryType = (e)=>{
    setBreweryParams({
      ...breweryParams,
      type: e.target.value,
    })
  }

  const filterBreweryState = (e)=>{
    setBreweryParams({
      ...breweryParams,
      state: e.target.value,
    })
  }

  const filterBreweryUSOnly = (e)=>{
    setBreweryParams({
      ...breweryParams,
      us_only: e.target.checked,
    })
  }

  const breweryTypes = {
    None: "none",
    Micro: "micro",
    Nano: "nano",
    Regional: "regional",
    Brewpub: "brewpub",
    Large: "large",
    Planning: "planning",
    Bar: "bar",
    Contract: "contract",
    Proprietor: "proprietor"  
  }

  const states = {
    None: "none",
    Alaska: "alaska",
    Alabama: "alabama",
    Arkansas: "arkansas",
    Arizona: "arizona", 
    California: "california",
    Colorado: "colorado",
    Connecticut: "connecticut",
    District_of_Columbia : "district_of_columbia",
    Delaware: "delaware",
    Florida: "florida",
    Georgia: "georgia",
    Hawaii: "hawaii",
    Iowa: "iowa",
    Idaho: "idaho",
    Illinois: "illinois",
    Indiana: "indiana",
    Kansas: "kansas",
    Kentucky: "kentucky",
    Louisiana: "louisiana",
    Massachusetts: "massachusetts",
    Maryland: "maryland",
    Maine: "maine",
    Michigan: "michigan",
    Minnesota: "minnesota",
    Missouri: "missouri",
    Mississippi: "mississippi",
    Montana: "montana",
    North_Carolina: "north_carolina",
    North_Dakota: "north_dakota",
    Nebraska: "nebraska",
    New_Hampshire: "new_hampshire",
    New_Jersey: "new_jersey",
    New_Mexico: "new_mexico",
    Nevada: "nevada",
    New_York: "new_york",
    Ohio: "ohio",
    Oklahoma: "oklahoma",
    Oregon: "oregon",
    Pennsylvania: "pennsylvania",
    Rhode_Island: "rhode_island",
    South_Carolina: "south_carolina",
    South_Dakota: "south_dakota",
    Tennessee: "tennessee",
    Texas: "texas",
    Utah: "utah",
    Virginia: "virginia",
    Vermont: "vermont",
    Washington: "washington",
    Wisconsin: "wisconsin",
    West_Virginia: "west_virginia",
    Wyoming: "wyoming"
  }

  return(
    <div className="flex flex-wrap flex-row justify-center items-end space-x-6 space-y-3"> 
      <div className="form-control">
         <label clasName="label">
          <span className="label-text text-magnolia">Search</span> 
        </label>
        <input type="text" placeholder="Brewery Name" onChange={searchBreweries} className="input input-bordered text-magnolia bg-independence border-magnolia" />
      </div>
      <div className="form-control">
        <label clasName="label">
          <span className="label-text text-magnolia">Brewery Type</span> 
        </label>
        <select onChange={filterBreweryType} className="select text-magnolia bg-independence border-magnolia">
          {Object.keys(breweryTypes).map((type)=>(
            <option key={breweryTypes[type]} value={breweryTypes[type]}>{type}</option>
          ))
          }
        </select>
      </div>
      <div className="form-control">
        <label clasName="label">
          <span className="label-text text-magnolia">Brewery State</span> 
        </label>
        <select onChange={filterBreweryState} className="select text-magnolia bg-independence border-magnolia">
          {Object.keys(states).map((state)=>(
            <option key={states[state]} value={states[state]}>{state.replaceAll("_", " ")}</option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label className="label space-x-3 cursor-pointer">
          <span className="label-text text-magnolia">Only Show US Breweries</span> 
          <input type="checkbox" onChange={filterBreweryUSOnly} className="checkbox border-magnolia" />
        </label>
      </div>
    </div>
  )
}

export default BreweriesListInputs