import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import WebRouter from './router/WebRouter.jsx'
import Footer from './components/Footer.jsx'
function App() {
  const {pathname}=useLocation();
  return(
    <>
      <Navbar showMobileNavbar={pathname==='/'}/>
      <WebRouter />
      <Footer/>
    </>
  )
}

export default App
