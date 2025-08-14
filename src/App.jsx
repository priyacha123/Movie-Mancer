import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {

  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default App
