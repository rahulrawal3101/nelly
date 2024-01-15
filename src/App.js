import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' ;
import HeaderComp from './pages/HeaderComp';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HeaderComp/>}/>
        
      </Routes>
    </Router>
    
    </>
  )
}

export default App
