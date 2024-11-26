import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import ParkingSpace from './Components/ParkingSpace';
import Wallet from './Components/Wallet';  // Import the Wallet component
import Contact from './Components/Contact';  // Import the Contact component


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<ParkingSpace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/parking-space" element={<ParkingSpace />} />
        <Route path="/wallet" element={<Wallet />} />  {/* Add Wallet route */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;