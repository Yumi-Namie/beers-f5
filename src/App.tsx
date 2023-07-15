import { useRoutes } from 'react-router-dom'
import { NavBarGlobal } from './components/Navbar'
import { routes } from './_App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

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
