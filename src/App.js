import React, { Component } from 'react';
import './App.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Body from "./Component/Body";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render(){
    return (
    <div className ="App">
      <Header/>
      <Body/>


      
     <Footer/>
      
</div>
    );
    }
  }
    
export default App;