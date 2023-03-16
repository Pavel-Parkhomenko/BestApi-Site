import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Pricing from './pages/Pricing/Pricing';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
        <Routes>
           <Route path='/credit-card-app' exact>
             <Redirect to="/" />
           </Route>
           <Route path='/' exact component={ Home } />
           <Route path='/pricing' exact component={ Pricing } />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
