import React, { Component } from 'react'
import PlantLog from './components/PlantLog.jsx'

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
      <PlantLog plants={ this.state.plants }/>
    )
  }
}

