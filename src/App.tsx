
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AddBeerPage } from './pages/AddBeerPage'
import { AllBeersPage } from './pages/AllBeersPage'
import { HomePage } from './pages/HomePage'
import { RandomBeerPage } from './pages/RandomBeerPage'
import { BeerDetailsPage } from './pages/BeerDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import { NavBarGlobal } from './components/Navbar'

function App() {

  return (
    <>
      <NavBarGlobal/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  )
}

export default App
