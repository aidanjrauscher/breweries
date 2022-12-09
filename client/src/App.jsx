import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import BreweriesList from './pages/BreweriesList'
import BreweryDetails from './pages/BreweryDetails'
import NotFound from './pages/404'

const App = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<BreweriesList />} />
        <Route path="/brewery/:breweryID" element={<BreweryDetails/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App