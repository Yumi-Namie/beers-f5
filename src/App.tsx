
import './App.css'
import { Route, Routes, useRoutes } from 'react-router-dom'
import { NavBarGlobal } from './components/Navbar'
import { routes } from './_App'


function App() {
  const element = useRoutes(routes)
  return (
    <>
      <NavBarGlobal/>
      {element}
      
    </>
  )
}

export default App
