import './App.css'
import { Route, Routes } from "react-router-dom";
import Projects from './pages/Projects'
import Snippets from '../src/pages/Snippets'
import UpcomingProjects from '../src/pages/UpcomingProjects'
import Navigation from '../src/components/navbar/Navigation'
import WhoAmI from './pages/WhoAmI';
import InProgress from './pages/InProgress';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Routes>
        <Route path='/myportfoliosite' element={<Projects />} />
        <Route path='/myportfoliosite/snippets' element={<Snippets />} />
        <Route path='/myportfoliosite/in-progress' element={<InProgress />} />
        <Route path='/myportfoliosite/upcoming-projects' element={<UpcomingProjects />} />
        <Route path='/myportfoliosite/whoami' element={<WhoAmI />} />
      </Routes>
    </div>
  )
}

export default App