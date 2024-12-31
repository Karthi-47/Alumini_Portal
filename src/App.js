import React, { useState } from "react";
import './App.css';
import Header from "./components/Header"; 
import Login from "./components/Login";    
import Content from "./components/Content";
import Footer from "./components/Footer"

const App = () => {
      const [showPopup, setShowPopup] = useState(false);
    
      // Function to open the login popup
      const handleOpenPopup = () => {
        setShowPopup(true);
      };
    
      // Function to close the login popup
      const handleClosePopup = () => {
        setShowPopup(false);
      };

  return (
      <div className="App">
        {/* Passing the openPopup function to the Header */}
        <Header openPopup={handleOpenPopup} />
        
        {/* Rendering the Login component and passing the closePopup function */}
        {showPopup && <Login closePopup={handleClosePopup} />}
        <Content />
        <Footer />
      </div>
  );
};

export default App;
