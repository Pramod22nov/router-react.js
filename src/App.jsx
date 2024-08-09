import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
// import { Route, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'
import User from './Components/User';
import Github from './Components/Github';



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/header" element={<Header />}/>
        <Route path="/footer" element={<Footer />}/> */}
          <Route path="User:userid" element={<User/>}/>
          <Route path="github" element={<Github/>}/>
      </Routes>      
    </Router>
    
  )
}

export default App
