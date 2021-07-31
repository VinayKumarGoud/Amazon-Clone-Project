import React from "react"
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header'
import Checkout from './Checkout'
import Home from './Home'
import Login from './Login'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {
  return (
    <Router>
    <div className="app">
     <Switch>
       <Route path="/checkout">
       <Header />
       <Navbar />
       <Checkout />
       <Footer />
       </Route>
       <Route path="/login">
         <Login />
       </Route>
       <Route path="/">
         <Header />
         <Navbar />
         <Home />
         <Footer />
       </Route>
       
     </Switch>
    </div>
    </Router>
  );
}

export default App;
