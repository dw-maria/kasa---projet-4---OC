import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './pages/home/Home';
import About from './pages/about/About';
import Accommodation from './pages/accommodation/Accommodation';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/accommodation/:id" element={<Accommodation />} />
		<Route path="/about" element={<About />} />
		<Route path="*" element={<NotFound />} />
	  </Routes>
    </BrowserRouter>
  );
}

export default App;
