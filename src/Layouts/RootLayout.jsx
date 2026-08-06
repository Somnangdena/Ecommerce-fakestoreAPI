import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Sidebar/>
    <Footer/>
    </>
  )
}

export default RootLayout