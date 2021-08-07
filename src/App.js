import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./Header"
import Footer from "./Footer"


class App extends React.Component{
  constructor(){
    super()
    this.state = {} //an array of 
  }

  render(){
    return(
      <div id="app" className="app">
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App;
