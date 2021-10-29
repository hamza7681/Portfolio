import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import ContactMe from "./Pages/Contact";
import NavbarMenu from "./Components/Sidebar/Navbar";
import Footer from "./Pages/Footer";
import CV from "./Pages/CV";
import logo from "./Assets/logo.png";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <>
          <div className="container-fluid text-center loading_wrapper">
            <img src={logo} alt="Loading..." className="loading_logo" />
            <h3 className='loading_logo1'>Loading...</h3>
          </div>
        </>
      ) : (
        <Router>
          <NavbarMenu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact-me" component={ContactMe} />
            <Route path="/cv" component={CV} />
          </Switch>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
