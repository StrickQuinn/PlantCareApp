import React, { Component } from 'react'
import PlantLog from './components/PlantLog.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import NewLog from './components/NewLog.jsx'

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const baseURL = 'http://localhost:8000/api/v1/plants/'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plants: []
    }
    this.getPlants = this.getPlants.bind(this)
  }

  componentDidMount() {
    this.getPlants()
  }

  getPlants() {
    fetch(baseURL)
    .then((data) => {
      console.log(data)
      return data.json()
    }).then((res) => {
      this.setState({
        plants: res.data
      })
    })
  }

  render() {
    return (
      <main>
        <Header />
        <NewLog />
        <PlantLog plants={ this.state.plants }/>
        <Footer />
      </main>
    )
  }
}

