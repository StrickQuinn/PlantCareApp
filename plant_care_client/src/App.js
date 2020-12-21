import React, { Component } from 'react'
import PlantLog from './components/PlantLog.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import NewLog from './components/NewLog.jsx'
import MainPage from './components/MainPage.jsx'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";

const baseURL = 'http://localhost:8000/api/v1/plants/'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plants: [],
    }
    this.getPlants = this.getPlants.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.showSingleView = this.showSingleView.bind(this)
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

  showSingleView(id) {
    fetch(baseURL + id, {
      method: "GET",
    })
    .then((res) => {
      const copyPlants = [...this.state.plants];
      const findIndex = this.state.plants.findIndex(
        (plant) => (plant.id) === id
      );
      this.setState({
        plant: copyPlants[findIndex]
      })
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ MainPage }/>
            <Route path="/log" component={() =>(
              <PlantLog 
                plants={ this.state.plants }
                showSingleView={ this.showSingleView }
              />
            )} />
            <Route path="/add" component={ NewLog } />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

