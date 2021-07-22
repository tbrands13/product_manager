import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from "./components/AllProducts";
import Form from "./components/Form";
import ProductView from "./components/ProductView";
import Edit from "./components/Edit";
import {Link, Router} from "@reach/router";

function App() {
  return (
    <div className="App">
      <h2>Product Manager</h2>
      <Router>
      <AllProducts path="/"/>
      <Form path="/products/new"/>
      <ProductView path="/products/show/:id"/>
      <Edit path="/products/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
