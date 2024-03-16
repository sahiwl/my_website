import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/aboutme' element={<AboutMe/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
