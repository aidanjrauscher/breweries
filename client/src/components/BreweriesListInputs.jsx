
import {
  TextField, 
  FormGroup, 
  FormControlLabel,
  MenuItem,
  Checkbox
} from '@mui/material';

const BreweriesListInputs = ({breweryParams, setBreweryParams, styles})=>{
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
          sx={{m: 2, 
            input: {
              color: '#efe9f4',
              borderBottom: "2px solid #efe9f4",
            },
            '&.MuiTextField-root': {
                color: '#efe9f4'
            },
            '& .MuiFilledInput-underline':{
              color: "#efe9f4",
              borderColor: '#efe9f4',
            },
          }}
          
        />
        <TextField
          select
          id="brewery-type"
          value={breweryParams.type}
          label="Brewery Type"
          onChange={filterBreweryType}
          sx={{m: 2, width: 160,  
            '& .MuiSelect-select, .MuiSelect-icon, .MuiOutlinedInput-notchedOutline, .MuiFormLabel-root, .MuiOutlinedInput-notchedOutline': {
              color: '#efe9f4',
              borderColor: '#efe9f4'
            },
          }}
        >
          {Object.keys(breweryTypes).map((type)=>(
            <MenuItem key={breweryTypes[type]} value={breweryTypes[type]}>{type}</MenuItem>
          ))
          }
        </TextField>
        <TextField
          select
          id="brewery-state"
          value={breweryParams.state}
          label="Brewery State"
          onChange={filterBreweryState}
          sx={{m: 2, width: 160,
            '& .MuiSelect-select, .MuiSelect-icon, .MuiOutlinedInput-notchedOutline, .MuiFormLabel-root, .MuiOutlinedInput-notchedOutline': {
              color: '#efe9f4',
              borderColor: '#efe9f4'
            },}}
          inputProps={{ style: { color: "white" } }}
        >
          {Object.keys(states).map((state)=>(
            <MenuItem key={states[state]} value={states[state]}>{state.replaceAll("_", " ")}</MenuItem>
          ))}
        </TextField>
        <FormControlLabel control={
          <Checkbox sx={{
            color: '#efe9f4',
            '&.Mui-checked': {
              color: '#efe9f4',
            },
          }} />
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