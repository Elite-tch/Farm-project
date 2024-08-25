import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx'; 
import Home from './navbar/Home.jsx';  
import Mission from './navbar/Mission.jsx'; 
import Contact from './navbar/Contact.jsx'; 
import Product from './navbar/Products.jsx'; 

import Gallery from './navbar/landingpage/gallery.jsx';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                
           
                <Routes>
            <Route path="/" element={<Home />} />         
                    <Route path="/mission" element={<Mission />} />
          <Route path="/product" element={<Product />} />
                    
                    <Route path="/contact" element={<Contact />} />


                    
                      <Route path="/gallery" element={<Gallery />} />
                    

                    
                </Routes>
            </div>
            
        </Router>
    );
}

export default App;
