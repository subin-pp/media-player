import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import History from './pages/History';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
