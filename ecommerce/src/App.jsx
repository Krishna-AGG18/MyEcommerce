import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer, Navbar } from './components'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
