import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import Pricing from './pages/Pricing/Pricing';
import SignIn from './pages/SignIn/SignIn';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
        <Routes>
           <Route path='/' element={ <Home /> } />
           <Route path='/products' element={ <Products /> } />
           <Route path='/services' element={ <Services /> } />
           <Route path='/pricing' element={ <Pricing />} />
           <Route path='/sign-in' element={ <SignIn /> } />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
