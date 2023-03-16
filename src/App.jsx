import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
           <Route path='/credit-card-app' exact>
             <Redirect to="/" />
           </Route>
           <Route path='/' exact component={ Home } />
      <Footer />
    </Router>
  );
}

export default App;
