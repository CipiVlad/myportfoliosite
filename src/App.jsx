import './App.css'
import Navigation from './components/navbar/Navigation'
import {
  Route,
  Routes,
} from "react-router-dom";
import Projects from './pages/Projects'
import Snippets from '../src/pages/Snippets'
import Background from './pages/Background'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Projects />}></Route>
        <Route path='/snippets' element={<Snippets />}></Route>
        <Route path='/background' element={<Background />}></Route>
      </Routes>
    </div>
  )
}

export default App