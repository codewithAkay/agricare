/*import React, { useState } from "react";
import { Login } from "./UserPages/Login";
import { Register } from "./UserPages/Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './UserPages/Navbar';
import Home from './UserPages/Home';
import About from './UserPages/About';
import Services from './UserPages/Services';
import Contact from './UserPages/Contact';
import Login from './UserPages/Login';
import { Register } from './UserPages/Register';
import { PostCrops } from './UserPages/PostCrops';
import Products from  './UserPages/Products';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Protected from './UserPages/Protected';
function App() {
  return (
    
    <Router>
      <div>
      <ToastContainer  
   position='top-center'
   autoClose={5000}
   hideProgressBar={false}
   newestOnTop={false}
   rtl={false}
   pauseOnFocusLoss
   draggable
   limit={1}
   pauseOnHover
   />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/postcrops" element={<Protected><PostCrops/></Protected>}/>
        </Routes>
      </div>
    </Router>
  );
}

// module.exports = { 
//   host: "localhost",
//   user: "root",
//   password: "root12345678",
//   database: "agricare",
// };

export default App;
