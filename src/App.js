import React from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <Link to="/employees/add" className="btn-floating right btn-large red">
      <i className="fa fa-plus fa-4x" />
    </Link>
  </div>
);

export default App;
