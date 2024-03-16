import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/aboutme' element={<AboutMe/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
