import React from 'react'
import Navbar from './Components/Navbar'
import Content from './Components/Content' 
import Destination from './Components/Destination'
import Bagan from './Components/Bagan'
import Rome from './Components/Rome'
import Sydney from './Components/Sydney'
import Review from './Components/Review'
import Footer from './Components/Footer'
import Secondnavbar from './Components/Pages/Secondnavbar'
import Home from './Components/Pages/Home'
import { BrowserRouter as Router, Route, Routes,useLocation  } from 'react-router-dom';
import Cardpage from './Components/Pages/Cardpage'
import Overview from './Components/Pages/Overview'
import Detail from './Components/Pages/Detail'
import Vision from './Components/Pages/Vision'
import Contact from './Components/Pages/Contact'
import Login from './Components/Pages/Login' 
import Signup from './Components/Pages/Signup' 





const App = () => {

  return (
    


    <div className=''>





         <Router>
          <Navbar/>
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/secondnavbar" element={<Secondnavbar />} />
        <Route path="/cardpage" element={<Cardpage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      <Footer/>
    </Router>
  
    </div>
  )
}

export default App