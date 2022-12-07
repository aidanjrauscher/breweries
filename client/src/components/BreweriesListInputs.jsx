
import {
  TextField, 
  FormGroup, 
  FormControlLabel,
  MenuItem,
  Checkbox
} from '@mui/material';

const BreweriesListInputs = ({breweryParams, setBreweryParams})=>{
  const searchBreweries = (e) =>{
    setBreweryParams({
      ...breweryParams,
      search: e.target.value,
    })
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
    <div className="flex justify-center"> 
      <FormGroup row={true}>       
        <TextField
          hiddenLabel
          id="brewery-search"
          placeholder="Search Breweries"
          type="search"
          variant="filled"
          value={breweryParams.search}
          onChange={searchBreweries}
          sx={{m: 2}}
        />
        <TextField
          select
          labelId="brewery-type-label"
          id="brewery-type"
          value={breweryParams.type}
          label="Brewery Type"
          onChange={filterBreweryType}
          sx={{m: 2, width: 160}}
        >
          {Object.keys(breweryTypes).map((type)=>(
            <MenuItem value={breweryTypes[type]}>{type}</MenuItem>
          ))
          }
        </TextField>
        <TextField
          select
          labelId="brewery-state-label"
          id="brewery-state"
          value={breweryParams.state}
          label="Brewery State"
          onChange={filterBreweryState}
          sx={{m: 2, width: 160}}
        >
          {Object.keys(states).map((state)=>(
            <MenuItem value={states[state]}>{state.replaceAll("_", " ")}</MenuItem>
          ))}
        </TextField>
        <FormControlLabel control={
          <Checkbox  />
        } 
        label="Only Show US Breweries" 
        labelPlacement="start"
        checked={breweryParams.us_only} 
        onChange={filterBreweryUSOnly}
        sx={{m: 2}}/>
      </FormGroup>  
    </div>
  )
}

export default BreweriesListInputs