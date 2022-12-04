import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import BreweriesList from './pages/BreweriesList'
import BreweryDetails from './pages/BreweryDetails'

const App = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<BreweriesList />} />
        <Route path="/brewery/:breweryID" element={<BreweryDetails/>} />
      </Routes>
    </Router>
  )
}

export default App